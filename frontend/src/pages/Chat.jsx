import { useState } from "react";
import {
  Send,
  Bot,
  User,
  Sparkles,
} from "lucide-react";

import { sendChatMessage } from "../services/api";

function Chat() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello! I am MSME Copilot AI. How can I help your business today?",
      time: "Now",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // ==========================================
  // SEND MESSAGE
  // ==========================================

  const handleSend = async () => {
    const message = input.trim();

    if (!message || loading) {
      return;
    }

    // Add user message
    setMessages((previous) => [
      ...previous,
      {
        sender: "user",
        text: message,
        time: "Now",
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      // Send message to backend
      const data = await sendChatMessage(message);

      // Add AI response
      setMessages((previous) => [
        ...previous,
        {
          sender: "ai",
          text:
            data.response ||
            data.message ||
            data.reply ||
            "I received your message, but I don't have a response yet.",
          time: "Now",
        },
      ]);
    } catch (error) {
      console.error("Chat API error:", error);

      setMessages((previous) => [
        ...previous,
        {
          sender: "ai",
          text:
            "Sorry, I couldn't connect to the AI service. Please make sure the backend is running.",
          time: "Now",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // ENTER KEY
  // ==========================================

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  // ==========================================
  // UI
  // ==========================================

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div>
        <p className="text-sm font-medium text-blue-600 mb-2">
          AI BUSINESS ASSISTANT
        </p>

        <h1 className="text-3xl font-bold text-slate-900">
          AI Copilot Chat
        </h1>

        <p className="text-slate-500 mt-2">
          Get AI-powered assistance for your business decisions.
        </p>
      </div>

      {/* CHAT BOX */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">

        {/* CHAT HEADER */}
        <div className="p-5 border-b border-slate-100 flex items-center gap-3">

          <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center">
            <Bot className="w-6 h-6 text-blue-600" />
          </div>

          <div>
            <h2 className="font-semibold text-slate-900">
              MSME Copilot AI
            </h2>

            <div className="flex items-center gap-2 mt-1">
              <span className="w-2 h-2 bg-green-500 rounded-full" />

              <p className="text-xs text-green-600">
                {loading ? "Thinking..." : "Online"}
              </p>
            </div>
          </div>

        </div>

        {/* MESSAGES */}
        <div className="p-6 space-y-5 min-h-[450px] max-h-[500px] overflow-y-auto">

          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex gap-3 ${
                message.sender === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >

              {/* AI ICON */}
              {message.sender === "ai" && (
                <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Bot className="w-5 h-5 text-blue-600" />
                </div>
              )}

              {/* MESSAGE */}
              <div
                className={`max-w-lg px-4 py-3 rounded-2xl text-sm ${
                  message.sender === "user"
                    ? "bg-blue-600 text-white rounded-br-md"
                    : "bg-slate-100 text-slate-700 rounded-bl-md"
                }`}
              >
                <p className="leading-6">
                  {message.text}
                </p>

                <span className="text-xs opacity-60 block mt-1">
                  {message.time}
                </span>
              </div>

              {/* USER ICON */}
              {message.sender === "user" && (
                <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
                  <User className="w-5 h-5 text-slate-600" />
                </div>
              )}

            </div>
          ))}

          {/* THINKING INDICATOR */}
          {loading && (
            <div className="flex gap-3 items-start">

              <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                <Bot className="w-5 h-5 text-blue-600" />
              </div>

              <div className="bg-slate-100 px-4 py-3 rounded-2xl rounded-bl-md">

                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />

                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:150ms]" />

                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:300ms]" />
                </div>

              </div>

            </div>
          )}

        </div>

        {/* INPUT */}
        <div className="border-t border-slate-100 p-4">

          <div className="flex gap-3">

            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask anything about your business..."
              disabled={loading}
              className="flex-1 px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-slate-50"
            />

            <button
              type="button"
              onClick={handleSend}
              disabled={!input.trim() || loading}
              className="px-5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center"
            >
              <Send className="w-5 h-5" />
            </button>

          </div>

          <p className="text-xs text-slate-400 mt-2">
            Press Enter to send
          </p>

        </div>

      </div>

      {/* AI FEATURES */}
      <div className="grid md:grid-cols-3 gap-5">

        {/* BUSINESS ADVICE */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5">
          <Sparkles className="w-5 h-5 text-purple-600" />

          <h3 className="font-semibold mt-3">
            Business Advice
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Get AI recommendations for your business.
          </p>
        </div>

        {/* SCHEME FINDER */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5">
          <Sparkles className="w-5 h-5 text-green-600" />

          <h3 className="font-semibold mt-3">
            Scheme Finder
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Find suitable government schemes and assistance.
          </p>
        </div>

        {/* AI ANALYSIS */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5">
          <Sparkles className="w-5 h-5 text-blue-600" />

          <h3 className="font-semibold mt-3">
            AI Analysis
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Analyze business documents, opportunities and risks.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Chat;