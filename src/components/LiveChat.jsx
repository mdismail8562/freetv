import { Send } from "lucide-react";
import { useEffect, useState } from "react";

const seed = [
  { id:1, name:"Viewer", text:"Stream quality looks good." },
  { id:2, name:"Guest", text:"Anyone else watching?" }
];

export default function LiveChat() {
  const [messages, setMessages] = useState(seed);
  const [text, setText] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setMessages(m => [...m, { id:Date.now(), name:"Live", text:"New viewer joined the chat." }].slice(-30));
    }, 12000);
    return () => clearInterval(timer);
  }, []);

  const send = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setMessages(m => [...m, { id:Date.now(), name:"You", text:text.trim() }].slice(-30));
    setText("");
  };

  return (
    <aside className="flex h-[430px] flex-col rounded-2xl border border-[#d8ae6c]/10 bg-[#1e1a28]">
      <div className="border-b border-white/5 px-4 py-3 text-sm font-bold">Live Chat</div>
      <div className="flex-1 space-y-3 overflow-y-auto p-4">
        {messages.map(m => <div key={m.id}><div className="text-[10px] font-bold text-[#d8ae6c]">{m.name}</div><div className="text-xs text-zinc-400">{m.text}</div></div>)}
      </div>
      <form onSubmit={send} className="flex gap-2 border-t border-white/5 p-3">
        <input value={text} onChange={e=>setText(e.target.value)} className="min-w-0 flex-1 rounded-full border border-white/10 bg-black/20 px-3 py-2 text-xs outline-none focus:border-[#d8ae6c]" placeholder="Write a message..."/>
        <button className="rounded-full bg-[#d8ae6c] p-2 text-black"><Send size={14}/></button>
      </form>
    </aside>
  );
}
