import { Bell, LogIn, LogOut, Menu, Search, UserCircle, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import LoginModal from "./LoginModal";

const nav = [
  ["/", "Home"],
  ["/categories", "Categories"],
  ["/favorites", "Favorites"],
  ["/profile", "Profile"]
];

export default function Navbar({ search, setSearch }) {
  const [loginOpen, setLoginOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isLoggedIn, user, logout } = useAuth();

  return (
    <>
      <header className="fixed top-7 left-0 right-0 z-[1000] border-b border-[#d8ae6c]/15 bg-[#0b0a10]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1500px] items-center gap-3 px-4 md:px-8">
          <button className="md:hidden text-zinc-300" onClick={() => setMobileOpen(v => !v)} aria-label="Menu">
            {mobileOpen ? <X size={20}/> : <Menu size={20}/>}
          </button>

          <Link to="/" className="min-w-fit leading-none">
            <div className="gold-text font-['Cinzel_Decorative'] text-base font-black tracking-wide md:text-lg">Till Infinity</div>
            <div className="mt-1 text-[8px] uppercase tracking-[3px] text-violet-400">Play</div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map(([to, label]) => (
              <NavLink key={to} to={to} className={({isActive}) =>
                `rounded-full px-3 py-2 text-xs font-semibold transition ${isActive ? "bg-[#d8ae6c] text-[#1a1408]" : "text-zinc-400 hover:text-[#f3d599]"}`
              }>{label}</NavLink>
            ))}
          </nav>

          <div className="ml-auto flex min-w-0 flex-1 items-center justify-end gap-2 md:justify-center">
            <div className="relative w-full max-w-md">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"/>
              <input value={search} onChange={e => setSearch(e.target.value)}
                className="w-full rounded-full border border-[#d8ae6c]/15 bg-[#1e1a28] py-2 pl-9 pr-3 text-xs text-zinc-100 outline-none placeholder:text-zinc-600 focus:border-[#d8ae6c]"
                placeholder="চ্যানেলের নাম সার্চ করুন..." />
            </div>
          </div>

          <Bell size={17} className="hidden text-zinc-500 sm:block"/>
          {isLoggedIn ? (
            <button onClick={logout} title={`Logout ${user?.name || ""}`} className="rounded-full border border-[#d8ae6c]/20 p-2 text-zinc-300 hover:text-[#f3d599]">
              <LogOut size={16}/>
            </button>
          ) : (
            <button onClick={() => setLoginOpen(true)} className="flex items-center gap-1 rounded-full bg-gradient-to-r from-[#d8ae6c] to-[#f3d599] px-3 py-2 text-[11px] font-extrabold text-[#1a1408]">
              <LogIn size={14}/> <span className="hidden sm:inline">Sign in</span>
            </button>
          )}
        </div>

        {mobileOpen && (
          <div className="border-t border-white/5 bg-[#17141f] px-4 py-3 md:hidden">
            {nav.map(([to,label]) => <Link onClick={() => setMobileOpen(false)} key={to} to={to} className="block border-b border-white/5 py-3 text-sm text-zinc-300">{label}</Link>)}
          </div>
        )}
      </header>
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
}
