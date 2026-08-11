import { useState } from "react";
import ChannelCard from "../components/ChannelCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { categories, channels } from "../data/channels";

export default function Categories() {
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem("ti_favorites") || "[]"));
  const toggleFavorite = id => setFavorites(prev => { const next=prev.includes(id)?prev.filter(x=>x!==id):[...prev,id]; localStorage.setItem("ti_favorites",JSON.stringify(next)); return next; });
  return <><Navbar search="" setSearch={()=>{}}/><main className="mx-auto max-w-[1500px] px-4 pb-10 pt-32 md:px-8">
    <h1 className="font-['Cinzel_Decorative'] text-2xl">Categories</h1>
    <p className="mt-2 text-xs text-zinc-500">Channel guide grouped by category.</p>
    <div className="mt-8 space-y-9">
      {categories.filter(c=>c.id!=="all").map(cat => {
        const list=channels.filter(c=>c.category===cat.id);
        return <section key={cat.id}><div className="mb-3 flex items-center justify-between"><h2 className="text-sm font-bold">{cat.label}</h2><span className="text-[9px] text-zinc-600">{list.length} channels</span></div><div className="flex gap-3 overflow-x-auto pb-2">{list.map(c=><div key={c.id} className="w-[180px] shrink-0"><ChannelCard channel={c} favorite={favorites.includes(c.id)} onFavorite={toggleFavorite}/></div>)}</div></section>
      })}
    </div>
  </main><Footer/></>;
}
