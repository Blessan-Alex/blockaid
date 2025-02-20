'use client'
import { Label } from '../components/ui/label';
import { Input } from '../components/input';
import { Butt } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { Alert, AlertDescription } from '../components/ui/alert';
import { useState } from 'react';

const AadharUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setError('');
      setResult('');
    }
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      setError('Please select a file first');
      return;
    }

    setIsLoading(true);
    setError('');
    setResult('');

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      console.log('Selected file:', selectedFile);

      const response = await fetch('/api/extract-aadhar', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error || 'Error processing the image');
        console.error('Error response:', errorData);
        return;
      }

      const data = await response.json();
      
      if (data.error) {
        setError(data.error);
      } else if (data.aadhaarNumber) {
        setResult(data.aadhaarNumber);
      }
    } catch (error) {
      setError('Error processing the image. Please try again.');
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <Label
            htmlFor="picture"
            className="text-xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text"
          >
            Select the image of your Aadhar
          </Label>
          <Input
            id="picture"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full bg-gray-100 border-gray-300 text-gray-800 placeholder-gray-500 focus:border-pink-500 focus:ring-pink-500"
          />
        </div>

        <Button
          onClick={handleSubmit}
          disabled={!selectedFile || isLoading}
          className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 text-white hover:opacity-90"
        >
          {isLoading ? 'Processing...' : 'Extract Aadhar Number'}
        </Button>

        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {result && (
          <Alert className="bg-green-50 border-green-200">
            <CheckCircle2 className="h-4 w-4 text-green-500" />
            <AlertDescription className="text-green-700">
              Aadhar Number: {result}
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
};

export default AadharUpload;