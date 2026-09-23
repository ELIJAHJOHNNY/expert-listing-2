"use client";

import { useRef, useState } from "react";
import { Post } from "@/types/feed";

export function PropertyMedia({
  media,
}: {
  media: NonNullable<Post["media"]>;
}) {
  const images = media.urls ?? [media.url];
  const trackRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  function move(direction: -1 | 1) {
    const next = Math.min(
      Math.max(activeIndex + direction, 0),
      images.length - 1,
    );
    trackRef.current?.scrollTo({
      left: trackRef.current.clientWidth * next,
      behavior: "smooth",
    });
    setActiveIndex(next);
  }

  function updateActive() {
    if (trackRef.current)
      setActiveIndex(
        Math.round(trackRef.current.scrollLeft / trackRef.current.clientWidth),
      );
  }

  function toggleVideo() {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      void videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }

  return (
    <div className="group relative -mx-[13px] h-60 overflow-hidden bg-transparent min-[600px]:h-[300px]">
      {media.videoSrc ? (
        <video
          className="size-full object-cover"
          loop
          onEnded={() => setIsPlaying(false)}
          playsInline
          poster={media.url}
          ref={videoRef}
          src={media.videoSrc}
        />
      ) : (
        <div
          className="flex size-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain motion-safe:scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Property images"
          onScroll={updateActive}
          ref={trackRef}
        >
          {images.map((url, index) => (
            <div
              className="h-full flex-[0_0_100%] snap-start bg-cover bg-center motion-safe:transition-[transform,filter] motion-safe:duration-500 motion-safe:ease-out motion-safe:hover:scale-[1.018]"
              key={url}
              role="img"
              aria-label={`Property image ${index + 1}`}
              style={{ backgroundImage: `url(${url})` }}
            />
          ))}
        </div>
      )}
      <span className="absolute top-2.5 left-2.5 rounded-[11px] bg-[#222d] px-[7px] py-[3px] text-[11px] font-bold text-white">
        ◇ {media.label}
      </span>
      {!media.videoSrc && images.length > 1 && (
        <span className="absolute top-2.5 right-2.5 rounded-2xl bg-[#222d] px-[7px] py-[3px] text-[11px] font-bold text-white">
          {activeIndex + 1}/{images.length}
        </span>
      )}
      {!media.videoSrc && images.length > 1 && (
        <div className="pointer-events-none absolute inset-0 hidden items-center justify-between px-3 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 min-[900px]:flex motion-safe:transition-opacity motion-safe:duration-300 [&>button]:pointer-events-auto [&>button]:size-8 [&>button]:rounded-full [&>button]:bg-white/90 [&>button]:text-[26px] [&>button]:leading-none [&>button]:text-[#245545] [&>button]:shadow-[0_3px_12px_#0002] [&>button:disabled]:opacity-35">
          <button
            aria-label="Previous property image"
            disabled={activeIndex === 0}
            onClick={() => move(-1)}
          >
            ‹
          </button>
          <button
            aria-label="Next property image"
            disabled={activeIndex === images.length - 1}
            onClick={() => move(1)}
          >
            ›
          </button>
        </div>
      )}
      {media.videoSrc && (
        <>
          <button
            className="absolute top-1/2 left-1/2 size-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/75 text-[#245545] shadow-lg"
            aria-label={
              isPlaying ? "Pause property video" : "Play property video"
            }
            onClick={toggleVideo}
          >
            {isPlaying ? "Ⅱ" : "▶"}
          </button>
          <span className="absolute bottom-[5px] left-1 rounded-[2px] bg-[#222d] px-[7px] py-[3px] text-[9px] font-bold text-white">
            {isPlaying ? "Ⅱ" : "▶"} Video tour
          </span>
        </>
      )}
      {!media.videoSrc && images.length > 1 && (
        <div
          className="absolute bottom-[9px] left-1/2 flex -translate-x-1/2 gap-1 [&>span]:h-1 [&>span]:rounded-full motion-safe:[&>span]:transition-[width,background] motion-safe:[&>span]:duration-300"
          aria-hidden="true"
        >
          {images.map((url, index) => (
            <span
              className={
                activeIndex === index ? "w-[13px] bg-white" : "w-1 bg-white/50"
              }
              key={url}
            />
          ))}
        </div>
      )}
    </div>
  );
}
