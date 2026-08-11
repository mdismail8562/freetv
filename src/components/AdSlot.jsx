import { useEffect, useRef } from "react";

export default function AdSlot({ variant = "banner" }) {
  const adRef = useRef(null);

  useEffect(() => {
    const container = adRef.current;
    if (!container) return;

    container.innerHTML = "";

    if (variant === "native") {
      const script = document.createElement("script");
      script.async = true;
      script.setAttribute("data-cfasync", "false");
      script.src = "https://pl30789516.effectivecpmnetwork.com/f68431f0c2917e5e6bd66cafa309e8c7/invoke.js";

      const adContainer = document.createElement("div");
      adContainer.id = "container-f68431f0c2917e5e6bd66cafa309e8c7";
      container.appendChild(script);
      container.appendChild(adContainer);
      return () => { container.innerHTML = ""; };
    }

    const options = document.createElement("script");
    options.text = `atOptions = { 'key' : 'ab984da7495df1f3889687e10126ef83', 'format' : 'iframe', 'height' : 250, 'width' : 300, 'params' : {} };`;

    const script = document.createElement("script");
    script.src = "https://www.highperformanceformat.com/ab984da7495df1f3889687e10126ef83/invoke.js";

    container.appendChild(options);
    container.appendChild(script);

    return () => { container.innerHTML = ""; };
  }, [variant]);

  return (
    <div className="my-6 flex w-full justify-center overflow-hidden py-3">
      <div className={variant === "native" ? "w-full max-w-[728px] text-center" : "w-[300px] max-w-full text-center"}>
        <span className="mb-2 block text-[8px] uppercase tracking-[2px] text-zinc-600">Advertisement</span>
        <div ref={adRef} />
      </div>
    </div>
  );
}
