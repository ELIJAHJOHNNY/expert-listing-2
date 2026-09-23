const stories = ["Your Story", "RamosRealty", "Jordan", "Taylor", "Jamie"],
  images = ["32", "5", "49", "11", "60"];
export function StoryRail() {
  return (
    <section
      className="flex gap-3 overflow-x-auto px-[13px] pt-0.5 pb-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      aria-label="Stories"
    >
      {stories.map((s, i) => (
        <button
          className="group grid min-w-[49px] shrink-0 cursor-pointer justify-items-center gap-1 bg-transparent p-0 text-[10px] text-[#555]"
          key={s}
        >
          <span
            className={
              "relative size-[47px] rounded-full [&>img]:size-full [&>img]:rounded-full [&>img]:border-2 [&>img]:border-white [&>img]:object-cover [&>b]:absolute [&>b]:-right-[3px] [&>b]:bottom-0 [&>b]:size-[17px] [&>b]:rounded-full [&>b]:border [&>b]:border-white [&>b]:bg-[#80bd42] [&>b]:text-[16px] [&>b]:leading-[17px] [&>b]:text-white motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:-translate-y-0.5 " +
              (!i
                ? "bg-[#edf1f1] p-0"
                : "bg-[linear-gradient(135deg,#3e9b7a,#b1dd64,#e4a86b)] p-0.5")
            }
          >
            <img src={`https://i.pravatar.cc/120?img=${images[i]}`} alt="" />
            {!i && <b>+</b>}
          </span>
          <span>{s}</span>
        </button>
      ))}
    </section>
  );
}
