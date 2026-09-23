"use client";
import { useState } from "react";
import Image from "next/image";
import Logo from "@/assets/svgs/Logo";
import trendUp from "@/assets/svgs/TrendUp.svg";
import filterIcon from "@/assets/svgs/mage_filter.svg";
import envelopeIcon from "@/assets/svgs/EnvelopeSimple.svg";
import plusIcon from "@/assets/svgs/Plus.svg";
import homeIcon from "@/assets/svgs/home.svg";
import feedIcon from "@/assets/svgs/feeds.svg";
import heartIcon from "@/assets/svgs/Heart.svg";
import notificationIcon from "@/assets/svgs/notification.svg";
import profileIcon from "@/assets/svgs/profile.svg";
import { BottomNavigation } from "@/components/navigation/bottom-navigation";
import { Composer } from "@/components/feed/composer";
import { FeedPost } from "@/components/feed/feed-post";
import { StoryRail } from "@/components/feed/story-rail";
import { posts } from "@/data/feed";
const desktopNav = ["Home", "Feed", "Wishlist", "Notification", "Profile"];
const sidebarIcons = {
  Home: homeIcon,
  Feed: feedIcon,
  Wishlist: heartIcon,
  Notification: notificationIcon,
  Profile: profileIcon,
};
export default function Home() {
  const [active, setActive] = useState("Feed");
  return (
    <main className="mx-auto overflow-x-clip min-[600px]:p-6 min-[900px]:grid min-[900px]:max-w-[1500px] min-[900px]:grid-cols-[230px_minmax(0,1fr)] min-[900px]:gap-[30px] min-[900px]:px-10 min-[900px]:py-7 min-[1200px]:gap-[42px] min-[1200px]:px-[7vw]">
      <aside className="sticky top-7 hidden h-[calc(100vh-56px)] flex-col rounded-[18px] bg-[#154d3f] px-4 py-[25px] text-[#eaf3ec] min-[900px]:flex min-[1200px]:px-[18px] min-[1200px]:py-[30px] [&_nav]:grid [&_nav]:gap-1.5 [&_nav_button]:flex [&_nav_button]:items-center [&_nav_button]:gap-[11px] [&_nav_button]:rounded-[9px] [&_nav_button]:px-2.5 [&_nav_button]:py-[11px] [&_nav_button]:text-left [&_nav_button]:text-[13px] [&_nav_button]:text-[#b9cfc5] [&_nav_button:hover]:bg-[#276554] [&_nav_button:hover]:text-white">
        <Logo
          aria-label="Expert Listing"
          className="mx-[9px] mt-1 mb-[38px] block h-6 w-44 shrink-0 brightness-0 invert"
          color="#ffffff"
        />
        <nav>
          {desktopNav.map((item) => (
            <button
              onClick={() => setActive(item)}
              className={active === item ? "bg-[#276554]! text-white!" : ""}
              key={item}
            >
              <Image
                alt=""
                aria-hidden="true"
                className="size-5 shrink-0 object-contain brightness-0 invert opacity-80 mb-1"
                height={20}
                src={sidebarIcons[item as keyof typeof sidebarIcons]}
                width={20}
              />
              {item}
            </button>
          ))}
        </nav>
        <div className="mt-auto flex items-center gap-2 border-t border-white/12 px-[7px] pt-[17px] [&>img]:size-[30px] [&>img]:rounded-full [&>span]:grid [&>span]:gap-px [&>span]:text-[11px] [&_small]:text-[9px] [&_small]:text-[#afc5bb] [&>button]:ml-auto [&>button]:text-white">
          <img
            src="https://res.cloudinary.com/da1bee2hs/image/upload/v1783465721/refuge/avatars/user_6a4d7cb2b3a02370d6278691.jpg"
            alt=""
          />
          <span>
            <b>Elijah Kugbiyi</b>
            <small>Individual account</small>
          </span>
          <button>•••</button>
        </div>
      </aside>
      <div className="min-w-0 min-[600px]:mx-auto min-[600px]:max-w-[1050px] min-[900px]:m-0 min-[900px]:w-full min-[900px]:max-w-[650px]">
        <div className="mx-auto min-h-screen max-w-[428px] bg-white pb-[73px] min-[600px]:overflow-hidden min-[600px]:rounded-[14px] min-[600px]:shadow-[0_0_0_1px_#e5e7e5] min-[900px]:w-full min-[900px]:min-w-0 min-[900px]:max-w-none min-[900px]:rounded-[18px]">
          <header className="relative flex h-[68px] items-center justify-between px-[14px] py-[18px] min-[900px]:h-[78px] min-[900px]:pt-[30px] min-[900px]:pb-2 min-[1000px]:px-[18px]">
            <Logo
              aria-label="Expert Listing"
              className="block h-5 w-[145px] shrink-0 min-[900px]:hidden"
              color="#105B48"
            />
            <div className="hidden gap-1 min-[900px]:grid [&>b]:text-[19px] [&>b]:tracking-[-0.5px] [&>span]:text-[11px] [&>span]:text-[#8d9290]">
              <b>Neighbourhood feed</b>
              <span>What&apos;s moving in Lagos today</span>
            </div>
            <div className="ml-auto flex items-center gap-[9px]">
              <button
                className="inline-flex size-[31px] shrink-0 items-center justify-center rounded-full bg-[#f8f8f8] p-0 text-[15px] text-[#636766] motion-safe:hover:-translate-y-0.5"
                aria-label="Messages"
                onClick={() => setActive("Notification")}
              >
                <Image
                  alt=""
                  aria-hidden="true"
                  height={18}
                  src={envelopeIcon}
                  width={18}
                />
              </button>
              <button
                className="inline-flex size-[31px] shrink-0 items-center justify-center rounded-full bg-[#f8f8f8] p-0 text-[15px] text-[#636766] motion-safe:hover:-translate-y-0.5"
                aria-label="Create listing"
              >
                <Image
                  alt=""
                  aria-hidden="true"
                  height={18}
                  src={plusIcon}
                  width={18}
                />
              </button>
            </div>
          </header>
          <StoryRail />
          <section
            className="flex gap-2 px-[13px] pb-3"
            aria-label="Discover content"
          >
            <button className="inline-flex cursor-pointer items-center justify-center gap-[5px] rounded-[20px] border border-[#eee] bg-white px-3 py-[7px] text-[11px] text-[#606260] shadow-[0_2px_5px_#00000005] hover:bg-[#f1f7f3] [&_img]:shrink-0">
              <Image
                alt=""
                aria-hidden="true"
                height={16}
                src={filterIcon}
                width={16}
              />
              <span>Filters</span>
            </button>
            <button className="inline-flex cursor-pointer items-center justify-center gap-[5px] rounded-[20px] border border-[#eee] bg-white px-3 py-[7px] text-[11px] text-[#606260] shadow-[0_2px_5px_#00000005] hover:bg-[#f1f7f3] [&_img]:shrink-0 text-[#445544]">
              <Image
                alt=""
                aria-hidden="true"
                height={16}
                src={trendUp}
                width={16}
              />
              <span>Trending Searches</span>
            </button>
          </section>
          <Composer />
          <section
            className="border-t border-[#f0f0f0]"
            aria-label="Property feed"
          >
            {posts.map((post) => (
              <FeedPost post={post} key={post.id} />
            ))}
            <p className="m-0 p-[13px] text-center text-[#a8aaaa]">
              You&apos;re all caught up
            </p>
          </section>
        </div>
      </div>
      <BottomNavigation active={active} onChange={setActive} />
    </main>
  );
}
