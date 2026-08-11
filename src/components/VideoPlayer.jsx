import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

export default function VideoPlayer({ urls = [], title }) {
  const videoRef = useRef(null);
  const [route, setRoute] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !urls.length) return;

    setError("");
    const src = urls[route];
    let hls;

    const start = () => {
      if (Hls.isSupported()) {
        hls = new Hls({ maxBufferLength: 40, lowLatencyMode: true, enableWorker: true });
        hls.loadSource(src);
        hls.attachMedia(video);
        hls.on(Hls.Events.ERROR, (_, data) => {
          if (data.fatal) setError("এই stream browser-এ play করা যাচ্ছে না।");
        });
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = src;
      } else {
        setError("এই browser HLS playback support করছে না।");
      }
    };

    start();
    return () => {
      if (hls) hls.destroy();
      video.pause();
      video.removeAttribute("src");
      video.load();
    };
  }, [route, urls]);

  const nextRoute = () => {
    if (route + 1 < urls.length) {
      setRoute(v => v + 1);
      setError("");
    } else {
      setError("সব supplied route fail করেছে বা source unavailable।");
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-[#d8ae6c]/15 bg-black shadow-2xl">
      <div className="relative aspect-video">
        <video ref={videoRef} controls autoPlay playsInline className="h-full w-full bg-black" />
        {error && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 p-6 text-center">
            <div className="text-sm font-semibold text-zinc-100">{error}</div>
            {route + 1 < urls.length && <button onClick={nextRoute} className="mt-3 rounded-full bg-[#d8ae6c] px-4 py-2 text-xs font-bold text-black">Try backup route</button>}
          </div>
        )}
      </div>
      <div className="flex items-center justify-between border-t border-white/5 bg-[#17141f] px-4 py-2">
        <span className="truncate text-xs font-semibold text-zinc-200">{title}</span>
        <span className="text-[9px] uppercase tracking-wider text-zinc-500">HLS route {route + 1}/{urls.length}</span>
      </div>
    </div>
  );
}
