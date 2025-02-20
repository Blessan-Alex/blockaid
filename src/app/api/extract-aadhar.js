import { GoogleAIFileManager } from "@google/generative-ai/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file received' },
        { status: 400 }
      );
    }

    // Convert the file to a buffer
    const buffer = Buffer.from(await file.arrayBuffer());
    
    // Create a temporary file path
    const fileName = file.name;
    const filePath = `/tmp/${fileName}`;
    
    // Write the buffer to a temporary file
    const fs = require('fs');
    fs.writeFileSync(filePath, buffer);

    const fileManager = new GoogleAIFileManager(process.env.GOOGLE_API_KEY);
    
    // Upload the file to Google AI
    const uploadResult = await fileManager.uploadFile(filePath, {
      mimeType: file.type,
      displayName: fileName,
    });

    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const result = await model.generateContent([
      "Extract aadhar number from this image.",
      {
        fileData: {
          fileUri: uploadResult.file.uri,
          mimeType: uploadResult.file.mimeType,
        },
      },
    ]);

    // Clean up the temporary file
    fs.unlinkSync(filePath);

    const text = await result.response.text();
    const aadhaarNumber = text.match(/\b\d{4}\s\d{4}\s\d{4}\b/);

    if (aadhaarNumber) {
      return NextResponse.json({ aadhaarNumber: aadhaarNumber[0] });
    } else {
      return NextResponse.json({ error: 'Aadhar Number not found.' });
    }

  } catch (error) {
    console.error('Error processing image:', error);
    return NextResponse.json(
      { error: 'Error processing image: ' + error.message },
      { status: 500 }
    );
  }
}