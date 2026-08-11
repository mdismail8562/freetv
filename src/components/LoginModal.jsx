import { X } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function LoginModal({ open, onClose }) {
  const { login } = useAuth();
  const [tab, setTab] = useState("login");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  if (!open) return null;

  const submit = (e) => {
    e.preventDefault();
    login(email || "guest@example.com", name || "Guest User");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[3000] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl border border-[#d8ae6c]/15 bg-[#1e1a28] p-5 shadow-2xl">
        <div className="flex items-center justify-between"><h2 className="font-['Cinzel_Decorative'] text-lg text-[#f3d599]">{tab === "login" ? "Welcome Back" : "Create Account"}</h2><button onClick={onClose}><X size={18}/></button></div>
        <div className="mt-4 flex rounded-full bg-black/20 p-1 text-xs">
          <button onClick={()=>setTab("login")} className={`flex-1 rounded-full py-2 ${tab==="login" ? "bg-[#d8ae6c] text-black font-bold": "text-zinc-500"}`}>Login</button>
          <button onClick={()=>setTab("signup")} className={`flex-1 rounded-full py-2 ${tab==="signup" ? "bg-[#d8ae6c] text-black font-bold": "text-zinc-500"}`}>Signup</button>
        </div>
        <form onSubmit={submit} className="mt-5 space-y-3">
          {tab==="signup" && <input value={name} onChange={e=>setName(e.target.value)} className="w-full rounded-xl border border-white/10 bg-black/20 p-3 text-sm outline-none" placeholder="Name"/>}
          <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full rounded-xl border border-white/10 bg-black/20 p-3 text-sm outline-none" placeholder="Email" required/>
          <input type="password" className="w-full rounded-xl border border-white/10 bg-black/20 p-3 text-sm outline-none" placeholder="Password" required/>
          <button className="w-full rounded-xl bg-gradient-to-r from-[#d8ae6c] to-[#f3d599] py-3 text-sm font-extrabold text-black">{tab==="login" ? "Login" : "Create Account"}</button>
        </form>
        <div className="mt-4 text-center text-[10px] text-zinc-600">Social login buttons can be connected later to your auth provider.</div>
      </div>
    </div>
  );
}
