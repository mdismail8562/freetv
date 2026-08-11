export default function Ticker() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[1100] h-7 overflow-hidden border-b border-white/5 bg-[#100e16]/95 text-[10px] text-zinc-400 backdrop-blur-md">
      <div className="flex min-w-max animate-[ticker_25s_linear_infinite] gap-10 px-4 py-1.5">
        <span>● LIVE NETWORK — Welcome to Till Infinity Play</span>
        <span>Premium live TV interface • Search • Categories • Favorites</span>
        <span>Player supports HLS streams when the source permits browser playback.</span>
        <span>● LIVE NETWORK — Welcome to Till Infinity Play</span>
      </div>
    </div>
  );
}
