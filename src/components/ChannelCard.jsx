import { Heart, Play, Radio, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { categoryLabel } from "../data/channels";

const tones = {
  bangla: "from-violet-500/20 to-[#17141f]",
  news: "from-sky-500/20 to-[#17141f]",
  sports: "from-[#d8ae6c]/20 to-[#17141f]",
  music: "from-purple-500/20 to-[#17141f]",
  movies: "from-rose-500/20 to-[#17141f]"
};

export default function ChannelCard({ channel, favorite, onFavorite, delay = 0 }) {
  return (
    <article className="stream-card group relative overflow-hidden rounded-xl border border-[#d8ae6c]/10 bg-[#1e1a28] shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:border-[#d8ae6c] hover:shadow-black/40" style={{"--reveal-delay": `${delay}s`}}>
      <Link to={`/watch/${channel.id}`} className="block">
        <div className={`relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br ${tones[channel.category] || tones.news}`}>
          <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,.02)_0,rgba(255,255,255,.02)_1px,transparent_1px,transparent_10px)]"/>
          <div className="live-dot absolute left-2 top-2 rounded-full border border-[#ff4d6d] bg-[#ff4d6d]/15 py-0.5 pl-3 pr-1.5 text-[8px] font-bold uppercase text-[#ff4d6d]">LIVE</div>
          <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-current bg-white/5 font-['Orbitron'] text-sm font-extrabold text-[#d8ae6c] transition group-hover:scale-110 group-hover:shadow-[0_0_0_5px_rgba(216,174,108,.1)]">{channel.mono}</div>
          <div className="absolute bottom-2 left-2 text-[8px] text-zinc-500">CH {channel.num}</div>
          <div className="absolute bottom-2 right-2 text-[#d8ae6c]/50"><Play size={13} fill="currentColor"/></div>
        </div>
        <div className="p-2.5">
          <div className="truncate text-xs font-bold text-zinc-100">{channel.name}</div>
          <div className="mt-1 flex items-center gap-2 text-[9px] uppercase tracking-wide text-zinc-500">
            <span>{categoryLabel(channel.category)}</span>
            <span className="flex items-center gap-1"><Users size={10}/>{channel.viewers.toLocaleString()}</span>
          </div>
        </div>
      </Link>
      <button onClick={(e) => { e.preventDefault(); onFavorite(channel.id); }} className={`absolute right-2 top-2 rounded-full p-1.5 backdrop-blur-md ${favorite ? "bg-[#d8ae6c] text-[#1a1408]" : "bg-black/30 text-zinc-400 hover:text-[#f3d599]"}`} aria-label="Favorite">
        <Heart size={13} fill={favorite ? "currentColor" : "none"}/>
      </button>
    </article>
  );
}
