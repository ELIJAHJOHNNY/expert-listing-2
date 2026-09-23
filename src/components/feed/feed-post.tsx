"use client";
import { useState } from "react";
import Image from "next/image";
import { PropertyMedia } from "@/components/feed/property-media";
import { Post } from "@/types/feed";
import heartIcon from "@/assets/svgs/Heart.svg";
import commentIcon from "@/assets/svgs/comment.svg";
import shareIcon from "@/assets/svgs/share.svg";
import bookmarkIcon from "@/assets/svgs/Bookmark.svg";
export function FeedPost({ post }: { post: Post }) {
  const [liked, setLiked] = useState(false),
    [saved, setSaved] = useState(false);
  return (
    <article className="border-b-[3px] border-[#f1f1f1] px-[13px] pt-[11px] pb-2.5">
      <header className="flex items-center gap-[7px] [&>img]:size-[34px] [&>img]:shrink-0 [&>img]:rounded-full [&>img]:object-cover [&>div]:flex-1 [&>div]:leading-[13px] [&_b]:text-[11px] [&_small]:text-[9px] [&_small]:text-[#999] [&_p]:m-0 [&_p]:text-[9px] [&_p]:text-[#999]">
        <img src={post.avatar} alt="" />
        <div>
          <b>{post.author}</b> <small>· {post.role}</small>
          <p>
            {post.time} · {post.location}
          </p>
        </div>
        <button
          aria-label="More options"
          className="cursor-pointer self-start bg-transparent font-bold tracking-[1px]"
        >
          •••
        </button>
      </header>
      <p className="mt-[5px] mb-[9px] text-[11px] leading-3">{post.text}</p>
      {post.media && <PropertyMedia media={post.media} />}
      {post.likedBy && (
        <div className="border-b border-[#eee] px-[3px] pt-[9px] pb-1.5 text-[10px] text-[#8c8d8c]">
          <span
            className="mr-[7px] inline-flex items-center align-middle [&>img]:-ml-1 [&>img]:size-4 [&>img]:rounded-full [&>img]:border [&>img]:border-white [&>img]:object-cover [&>img:first-child]:ml-0"
            aria-hidden="true"
          >
            <img src="https://i.pravatar.cc/48?img=12" alt="" />
            <img src="https://i.pravatar.cc/48?img=32" alt="" />
            <img src="https://i.pravatar.cc/48?img=47" alt="" />
          </span>
          Liked by <b>{post.likedBy}</b>
        </div>
      )}
      <div className="flex h-[31px] items-center gap-[11px] text-[10px] text-[#777] [&>button]:inline-flex [&>button]:items-center [&>button]:gap-[3px] [&>button]:bg-transparent [&>button]:p-0 [&>button]:text-[12px] [&>button]:text-[#6c7070] [&_img]:size-[15px] [&_img]:object-contain [&>span]:mr-auto motion-safe:[&>button:hover]:scale-110">
        <button
          onClick={() => setLiked(!liked)}
          className={
            liked
              ? "text-[#287c62]! [&_img]:[filter:brightness(0)_saturate(100%)_invert(36%)_sepia(17%)_saturate(1758%)_hue-rotate(109deg)_brightness(92%)_contrast(85%)]"
              : ""
          }
          aria-pressed={liked}
        >
          <Image
            alt=""
            aria-hidden="true"
            height={15}
            src={heartIcon}
            width={15}
          />
          {post.likes + (liked ? 1 : 0)}
        </button>
        <button>
          <Image
            alt=""
            aria-hidden="true"
            height={15}
            src={commentIcon}
            width={15}
          />
          {post.comments}
        </button>
        <button>
          <Image
            alt=""
            aria-hidden="true"
            height={15}
            src={shareIcon}
            width={15}
          />
          {post.shares}
        </button>
        <span>{post.views}</span>
        <button
          onClick={() => setSaved(!saved)}
          className={
            saved
              ? "text-[#287c62]! [&_img]:[filter:brightness(0)_saturate(100%)_invert(36%)_sepia(17%)_saturate(1758%)_hue-rotate(109deg)_brightness(92%)_contrast(85%)]"
              : ""
          }
          aria-label="Bookmark post"
          aria-pressed={saved}
        >
          <Image
            alt=""
            aria-hidden="true"
            height={15}
            src={bookmarkIcon}
            width={15}
          />
        </button>
      </div>
      {post.replies && (
        <>
          <p className="mt-0.5 mb-1.5 text-[10px] leading-[13px]">
            {post.replies}
          </p>
          <button className="bg-transparent p-0 text-[10px] text-[#999]">
            View all 7 comments
          </button>
        </>
      )}
    </article>
  );
}
