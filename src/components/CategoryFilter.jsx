import { Home, Newspaper, Trophy, Music2, Film } from "lucide-react";
import { categories } from "../data/channels";

const icons = { all: Home, bangla: null, news: Newspaper, sports: Trophy, music: Music2, movies: Film };

export default function CategoryFilter({ active, onChange }) {
  return (
    <div className="mb-6 flex gap-2 overflow-x-auto pb-1">
      {categories.map(c => {
        const Icon = icons[c.id];
        return (
          <button key={c.id} onClick={() => onChange(c.id)}
            className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold transition ${active === c.id ? "border-transparent bg-gradient-to-r from-[#d8ae6c] to-[#f3d599] text-[#1a1408] shadow-lg shadow-[#d8ae6c]/10" : "border-[#d8ae6c]/15 bg-transparent text-zinc-500 hover:border-[#d8ae6c] hover:text-[#f3d599]"}`}>
            {Icon && <Icon size={13} className="mr-1 inline-block"/>}{c.label}
          </button>
        );
      })}
    </div>
  );
}
