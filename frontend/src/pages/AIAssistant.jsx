import { useState } from "react";
import { Bot, Send, User } from "lucide-react";

function AIAssistant() {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hello! I'm MSME Copilot AI. How can I help your business today?",
    },
  ]);

  const handleSend = () => {
    if (!message.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: message,
      },
    ]);

    setMessage("");
  };

  return (
    <div className="flex h-[calc(100vh-80px)] flex-col">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">
          AI Business Assistant
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Get instant AI-powered guidance for your MSME business.
        </p>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <div className="space-y-5">

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex gap-3 ${
                msg.role === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >

              {msg.role === "assistant" && (
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100">
                  <Bot size={18} className="text-blue-600" />
                </div>
              )}

              <div
                className={`max-w-[70%] rounded-2xl px-4 py-3 text-sm ${
                  msg.role === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                {msg.text}
              </div>

              {msg.role === "user" && (
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-200">
                  <User size={18} className="text-slate-600" />
                </div>
              )}

            </div>
          ))}

        </div>
      </div>

      {/* Input */}
      <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">

        <div className="flex items-center gap-3">

          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSend();
            }}
            placeholder="Ask anything about your business..."
            className="flex-1 bg-transparent px-3 py-3 text-sm outline-none"
          />

          <button
            onClick={handleSend}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white transition hover:bg-blue-700"
          >
            <Send size={18} />
          </button>

        </div>

      </div>

    </div>
  );
}

export default AIAssistant;