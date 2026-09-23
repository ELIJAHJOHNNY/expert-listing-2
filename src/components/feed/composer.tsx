import { ComposerInput } from "@/components/ui/composer-input";
export function Composer() {
  return (
    <section className="group mx-3 mb-[11px] flex h-[38px] items-center gap-2 rounded-[22px] bg-[#f8f9f9] p-[5px] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#8ec55d33] motion-safe:transition motion-safe:duration-200 motion-safe:focus-within:-translate-y-px [&>img]:size-7 [&>img]:shrink-0 [&>img]:rounded-full [&>img]:object-cover">
      <img
        src="https://res.cloudinary.com/da1bee2hs/image/upload/v1783465721/refuge/avatars/user_6a4d7cb2b3a02370d6278691.jpg"
        alt="Your profile"
      />
      <ComposerInput placeholder="Share a property, request or say something..." />
    </section>
  );
}
