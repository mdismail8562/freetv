export default function AdSlot({ variant = "banner" }) {
  if (variant === "native") {
    return (
      <div className="my-6 flex w-full justify-center overflow-hidden py-3">
        <div className="w-full max-w-[728px] text-center">
          <span className="mb-2 block text-[8px] uppercase tracking-[2px] text-zinc-600">Advertisement</span>
          <script async="async" data-cfasync="false" src="https://pl30789516.effectivecpmnetwork.com/f68431f0c2917e5e6bd66cafa309e8c7/invoke.js"></script>
          <div id="container-f68431f0c2917e5e6bd66cafa309e8c7"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="my-6 flex w-full justify-center overflow-hidden py-3">
      <div className="w-[300px] max-w-full text-center">
        <span className="mb-2 block text-[8px] uppercase tracking-[2px] text-zinc-600">Advertisement</span>
        <script dangerouslySetInnerHTML={{ __html: `atOptions = { 'key' : 'ab984da7495df1f3889687e10126ef83', 'format' : 'iframe', 'height' : 250, 'width' : 300, 'params' : {} };` }} />
        <script src="https://www.highperformanceformat.com/ab984da7495df1f3889687e10126ef83/invoke.js"></script>
      </div>
    </div>
  );
}
