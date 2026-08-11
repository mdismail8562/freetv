export default function AdSlot({ variant = "banner" }) {
  return (
    <div className="my-5 flex min-h-24 flex-col items-center justify-center gap-2 overflow-hidden border-y border-dashed border-[#d8ae6c]/15 py-4">
      <span className="text-[8px] uppercase tracking-[2px] text-zinc-600">Advertisement</span>
      {variant === "banner" ? (
        <div className="flex h-[100px] w-full max-w-[728px] items-center justify-center rounded-lg border border-white/5 bg-black/10 text-[10px] text-zinc-700">
          Ad slot — paste your authorized provider code here
        </div>
      ) : (
        <div className="flex h-20 w-full items-center justify-center rounded-lg border border-white/5 bg-black/10 text-[10px] text-zinc-700">
          Native ad slot
        </div>
      )}
    </div>
  );
}
