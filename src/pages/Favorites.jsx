import { useState } from "react";
import { Link } from "react-router-dom";
import ChannelCard from "../components/ChannelCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { channels } from "../data/channels";

export default function Favorites() {
  const [favorites,setFavorites]=useState(()=>JSON.parse(localStorage.getItem("ti_favorites")||"[]"));
  const list=channels.filter(c=>favorites.includes(c.id));
  const toggle=id=>setFavorites(prev=>{const next=prev.filter(x=>x!==id);localStorage.setItem("ti_favorites",JSON.stringify(next));return next;});
  return <><Navbar search="" setSearch={()=>{}}/><main className="mx-auto max-w-[1500px] px-4 pb-10 pt-32 md:px-8"><h1 className="font-['Cinzel_Decorative'] text-2xl">Favorites</h1><p className="mt-2 text-xs text-zinc-500">Your saved channels are stored locally in this browser.</p>{list.length?<div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5">{list.map(c=><ChannelCard key={c.id} channel={c} favorite onFavorite={toggle}/>)}</div>:<div className="mt-8 rounded-2xl border border-dashed border-[#d8ae6c]/15 p-10 text-center text-sm text-zinc-500">No favorites yet. <Link className="text-[#d8ae6c]" to="/">Browse channels</Link></div>}</main><Footer/></>;
}
