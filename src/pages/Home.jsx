import { useMemo, useState } from "react";
import Ticker from "../components/Ticker";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategoryFilter from "../components/CategoryFilter";
import ChannelGrid from "../components/ChannelGrid";
import Footer from "../components/Footer";
import AdSlot from "../components/AdSlot";
import { channels } from "../data/channels";

export default function Home() {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState("all");
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem("ti_favorites") || "[]"));

  const filtered = useMemo(() => channels.filter(c =>
    (active === "all" || c.category === active) &&
    c.name.toLowerCase().includes(search.toLowerCase().trim())
  ), [search, active]);

  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const next = prev.includes(id) ? prev.filter(x=>x!==id) : [...prev,id];
      localStorage.setItem("ti_favorites", JSON.stringify(next));
      return next;
    });
  };

  const featured = channels.find(c => c.category === "sports") || channels[0];

  return (
    <>
      <Ticker/>
      <Navbar search={search} setSearch={setSearch}/>
      <main className="mx-auto max-w-[1500px] px-4 pb-6 pt-[110px] md:px-8">
        <Hero channel={featured} total={channels.length}/>
        <CategoryFilter active={active} onChange={setActive}/>
        <AdSlot variant="banner"/>
        <div className="mb-3 flex items-end justify-between">
          <div><div className="text-sm font-bold text-zinc-100">Live Channels</div><div className="mt-1 text-[9px] uppercase tracking-wider text-zinc-600">{filtered.length} channels matched</div></div>
          <select value={active} onChange={e=>setActive(e.target.value)} className="rounded-full border border-[#d8ae6c]/15 bg-[#1e1a28] px-3 py-2 text-[10px] text-zinc-400 outline-none">
            <option value="all">All Categories</option><option value="bangla">Bangla Pack</option><option value="news">News Networks</option><option value="sports">Sports Zone</option><option value="music">Music & Kids</option><option value="movies">Movies Feed</option>
          </select>
        </div>
        <ChannelGrid channels={filtered} favorites={favorites} onFavorite={toggleFavorite}/>
        <AdSlot variant="native"/>
      </main>
      <Footer/>
    </>
  );
}
