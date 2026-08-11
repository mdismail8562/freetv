import { Play, Radio, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero({ channel, total }) {
  return (
    <section className="mb-6 rounded-2xl border border-[#d8ae6c]/10 bg-gradient-to-br from-[#1e1a28]/80 to-[#111018]/70 p-5 shadow-2xl shadow-black/20 md:p-7">
      <div className="mb-2 text-[10px] font-bold uppercase tracking-[4px] text-violet-400">Live Streaming Network</div>
      <h1 className="font-['Cinzel_Decorative'] text-xl font-bold md:text-3xl">সব চ্যানেল, <span className="text-[#d8ae6c]">এক জায়গায়</span></h1>
      <p className="mt-2 max-w-2xl text-xs leading-6 text-zinc-500">Premium live-channel interface with responsive navigation, search, favorites, authentication UI and HLS playback.</p>

      <div className="mt-5 grid max-w-xl grid-cols-3 gap-3">
        <div><b className="font-['Orbitron'] text-lg text-[#f3d599]">{total}</b><small className="block text-[9px] uppercase tracking-wider text-zinc-500">Total Channels</small></div>
        <div><b className="font-['Orbitron'] text-lg text-[#f3d599]">05</b><small className="block text-[9px] uppercase tracking-wider text-zinc-500">Categories</small></div>
        <div><b className="font-['Orbitron'] text-lg text-[#f3d599]">HLS</b><small className="block text-[9px] uppercase tracking-wider text-zinc-500">Player Engine</small></div>
      </div>

      {channel && (
        <Link to={`/watch/${channel.id}`} className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d8ae6c] to-[#f3d599] px-4 py-2 text-xs font-extrabold text-[#1a1408]">
          <Play size={14} fill="currentColor"/> Watch featured: {channel.name}
          <span className="ml-1 flex items-center gap-1 text-[9px]"><Radio size={11}/> <Users size={11}/>{channel.viewers.toLocaleString()}</span>
        </Link>
      )}
    </section>
  );
}
