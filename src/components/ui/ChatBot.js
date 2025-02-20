import { useState } from "react";
import { motion } from "motion/react";
import { sendMessageToGemini } from "@/utils/geminiApi"; // Import the utility function

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

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
    <div className="relative">
      <button
        onClick={handleToggle}
        className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white p-4 rounded-full shadow-lg"
      >
        {isOpen ? "Close Chat" : "Chat with us"}
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-12 right-0 w-80 bg-white p-4 rounded-lg shadow-lg border border-gray-300"
        >
          <div className="h-64 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-2 my-2 rounded-lg ${
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
              className="bg-pink-500 text-white p-2 rounded-r-lg"
            >
              Send
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ChatBot;
