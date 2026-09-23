import Image, { StaticImageData } from "next/image";
import homeIcon from "@/assets/svgs/home.svg";
import feedIcon from "@/assets/svgs/feeds.svg";
import heartIcon from "@/assets/svgs/Heart.svg";
import notificationIcon from "@/assets/svgs/notification.svg";
import profileIcon from "@/assets/svgs/profile.svg";

const navigationItems: { icon: StaticImageData; label: string }[] = [
  { icon: homeIcon, label: "Home" },
  { icon: feedIcon, label: "Feed" },
  { icon: heartIcon, label: "Wishlist" },
  { icon: notificationIcon, label: "Notification" },
  { icon: profileIcon, label: "Profile" },
];

export function BottomNavigation({
  active,
  onChange,
}: {
  active: string;
  onChange: (label: string) => void;
}) {
  return (
    <nav
      className="fixed bottom-0 left-1/2 z-3 flex h-[72px] w-full max-w-[428px] -translate-x-1/2 justify-around border-t border-[#ddd] bg-white min-[600px]:shadow-[0_-2px_12px_#00000009] min-[900px]:hidden [&>button]:relative [&>button]:grid [&>button]:min-w-[52px] [&>button]:content-center [&>button]:justify-items-center [&>button]:gap-[3px] [&>button]:bg-transparent [&>button]:text-[9px] [&_img]:size-5 [&_img]:object-contain"
      aria-label="Primary navigation"
    >
      {navigationItems.map(({ icon, label }) => (
        <button
          onClick={() => onChange(label)}
          className={
            active === label
              ? "font-bold text-[#4f7a1f] [&_img]:[filter:brightness(0)_saturate(100%)_invert(43%)_sepia(41%)_saturate(734%)_hue-rotate(45deg)_brightness(89%)_contrast(86%)]"
              : "text-[#434343] [&_img]:[filter:brightness(0)_saturate(100%)_invert(22%)_sepia(0%)_saturate(0%)_hue-rotate(182deg)_brightness(95%)_contrast(88%)]"
          }
          key={label}
        >
          <Image alt="" aria-hidden="true" height={20} src={icon} width={20} />
          <span className="inline-flex items-center gap-1">
            {label}
            {label === "Feed" && (
              <em className="rounded bg-[#dcf0b6] px-[3px] py-px text-[8px] font-normal leading-none text-[#6e9c42] not-italic">
                Beta
              </em>
            )}
          </span>
        </button>
      ))}
    </nav>
  );
}
