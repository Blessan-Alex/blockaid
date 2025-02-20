import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import axios from "axios";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const sendMessage = async () => {
    if (input.trim() === "") return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);

    try {
      const response = await axios.post(
        "https://api.gemini.com/v1/chat",
        { message: input },
        { headers: { Authorization: `Bearer ${process.env.GEMINI_API_KEY}` } }
      );
      const botMessage = { sender: "bot", text: response.data.reply };
      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
    }

    setInput("");
  };

  return (
    <div className="relative">
      <Button
        onClick={toggleChatbot}
        className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white font-semibold py-2 px-4 rounded-full transition-all duration-200 shadow-lg"
      >
        Chat
      </Button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-12 right-0 w-80 p-4 bg-white rounded-lg shadow-lg border border-gray-300"
        >
          <h2 className="text-lg font-bold mb-2">How can I help you?</h2>
          <div className="space-y-2">
            {messages.map((msg, index) => (
              <div key={index} className={`text-${msg.sender === "user" ? "right" : "left"}`}>
                <p className={`p-2 rounded-lg ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}>
                  {msg.text}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              className="flex-1 p-2 border border-gray-300 rounded-l-lg"
              placeholder="Type your message..."
            />
            <Button onClick={sendMessage} className="bg-blue-500 text-white p-2 rounded-r-lg">
              Send
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
