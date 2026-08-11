import { Heart, Share2, ThumbsUp } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { channels } from "../data/channels";
import VideoPlayer from "../components/VideoPlayer";
import LiveChat from "../components/LiveChat";
import ChannelCard from "../components/ChannelCard";

export default function WatchChannel() {
  const { id } = useParams();
  const channel = channels.find(c=>c.id===id);
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem("ti_favorites") || "[]"));
  if (!channel) return <div className="min-h-screen bg-[#0b0a10] p-8 text-zinc-300"><Link to="/">← Back home</Link><h1 className="mt-10 text-xl">Channel not found</h1></div>;

  const toggleFavorite = (cid) => {
    setFavorites(prev => {
      const next = prev.includes(cid) ? prev.filter(x=>x!==cid) : [...prev,cid];
      localStorage.setItem("ti_favorites", JSON.stringify(next));
      return next;
    });
  };

  const related = channels.filter(c=>c.category===channel.category && c.id!==channel.id).slice(0,5);

  return (
    <div className="min-h-screen bg-[#0b0a10] pt-8 text-zinc-100">
      <main className="mx-auto max-w-[1500px] px-4 py-8 md:px-8">
        <div className="mb-5 flex items-center justify-between"><Link to="/" className="text-xs text-zinc-500 hover:text-[#f3d599]">← Back to channels</Link><span className="text-[9px] uppercase tracking-wider text-zinc-600">Live player</span></div>
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
          <section>
            <VideoPlayer urls={channel.urls} title={channel.name}/>
            <div className="mt-4 rounded-2xl border border-[#d8ae6c]/10 bg-[#1e1a28] p-5">
              <div className="flex flex-wrap items-center gap-3"><h1 className="text-xl font-bold">{channel.name}</h1><span className="rounded-full bg-[#ff4d6d]/15 px-2 py-1 text-[9px] font-bold text-[#ff4d6d]">LIVE</span></div>
              <p className="mt-2 text-xs text-zinc-500">{channel.description} • {channel.viewers.toLocaleString()} viewers</p>
              <div className="mt-4 flex gap-2">
                <button className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs text-zinc-400"><ThumbsUp size={14}/> Like</button>
                <button onClick={()=>toggleFavorite(channel.id)} className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs text-zinc-400"><Heart size={14} fill={favorites.includes(channel.id) ? "currentColor":"none"}/> Favorite</button>
                <button onClick={()=>navigator.clipboard?.writeText(location.href)} className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs text-zinc-400"><Share2 size={14}/> Share</button>
              </div>
            </div>
          </section>
          <LiveChat/>
        </div>
        <section className="mt-8">
          <h2 className="mb-4 text-sm font-bold">Related channels</h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {related.map(c=><ChannelCard key={c.id} channel={c} favorite={favorites.includes(c.id)} onFavorite={toggleFavorite}/>)}
          </div>
        </section>
      </main>
    </div>
  );
}
