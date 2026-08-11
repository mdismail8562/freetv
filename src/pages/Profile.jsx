import { LogOut, UserCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";
import { channels } from "../data/channels";

export default function Profile() {
  const { user, isLoggedIn, logout } = useAuth();
  const favorites = JSON.parse(localStorage.getItem("ti_favorites") || "[]");
  return <><Navbar search="" setSearch={()=>{}}/><main className="mx-auto max-w-3xl px-4 pb-10 pt-32 md:px-8">
    <div className="rounded-2xl border border-[#d8ae6c]/10 bg-[#1e1a28] p-6">
      <div className="flex items-center gap-4"><UserCircle size={52} className="text-[#d8ae6c]"/><div><h1 className="text-xl font-bold">{user?.name || "Guest User"}</h1><p className="text-xs text-zinc-500">{user?.email || "Not signed in"}</p></div></div>
      <div className="mt-6 grid grid-cols-2 gap-3"><div className="rounded-xl bg-black/15 p-4"><b className="text-xl text-[#f3d599]">{favorites.length}</b><div className="text-[9px] uppercase tracking-wider text-zinc-600">Favorites</div></div><div className="rounded-xl bg-black/15 p-4"><b className="text-xl text-[#f3d599]">{channels.length}</b><div className="text-[9px] uppercase tracking-wider text-zinc-600">Available channels</div></div></div>
      {isLoggedIn ? <button onClick={logout} className="mt-5 flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs text-zinc-400"><LogOut size={14}/> Logout</button> : <Link to="/" className="mt-5 inline-block rounded-full bg-[#d8ae6c] px-4 py-2 text-xs font-bold text-black">Go Home</Link>}
    </div>
  </main><Footer/></>;
}
