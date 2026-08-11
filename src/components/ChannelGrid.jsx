import ChannelCard from "./ChannelCard";

export default function ChannelGrid({ channels, favorites, onFavorite }) {
  if (!channels.length) return <div className="rounded-xl border border-dashed border-[#d8ae6c]/15 py-16 text-center text-sm text-zinc-500">কোনো channel পাওয়া যায়নি।</div>;
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {channels.map((channel, i) => <ChannelCard key={channel.id} channel={channel} favorite={favorites.includes(channel.id)} onFavorite={onFavorite} delay={Math.min(i, 20) * .03}/>)}
    </div>
  );
}
