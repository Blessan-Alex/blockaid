import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { sendMessageToGemini } from "@/utils/geminiApi"; // Import the utility function

const initialMessages = [
  "Hey, how can I help you with this process?",
  "Need assistance with creating a wallet?",
  "I'm here to help you with your registration.",
  "Have any questions about the process?",
];

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const randomMessage = initialMessages[Math.floor(Math.random() * initialMessages.length)];
    const initialMessage = { sender: "bot", text: randomMessage };
    setMessages([initialMessage]);
  }, []);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);

    try {
      const botMessage = await sendMessageToGemini(input);
      setMessages((prevMessages) => [...prevMessages, { sender: "bot", text: botMessage }]);
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error("Error sending message:", error);
      setError("Failed to send message. Please try again.");
    }

    setInput("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-12 h-1/2 overflow-scroll right-0 w-80 p-4 bg-white rounded-lg shadow-lg border border-gray-300"
    >
      <div className="h-full  overflow-y-auto max-h-44 p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-5 my-2 rounded-lg ${
              message.sender === "user"
                ? "bg-pink-500 text-white self-end"
                : "bg-gray-200 text-gray-800 self-start"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="flex mt-4">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          className="flex-1 p-2 border border-gray-300 rounded-l-lg"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSendMessage}
          className="bg-pink-500 text-white p-4 rounded-r-lg"
        >
          Send
        </button>
      </div>
    </motion.div>
  );
};

export default ChatBot;
