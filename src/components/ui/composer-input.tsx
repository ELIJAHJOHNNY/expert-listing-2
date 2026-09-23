"use client";

import { FormEvent, useState } from "react";

export function ComposerInput({ placeholder }: { placeholder: string }) {
  const [value, setValue] = useState("");
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!value.trim()) return;
    setValue("");
    setSubmitted(true);
    window.setTimeout(() => setSubmitted(false), 1800);
  }
  return (
    <form
      className="flex min-w-0 flex-1 items-center [&>input]:w-full [&>input]:min-w-0 [&>input]:border-0 [&>input]:bg-transparent [&>input]:text-[#2a2d2c] [&>input]:outline-none [&>input::placeholder]:text-[#9a9d9d]"
      onSubmit={handleSubmit}
    >
      <input
        aria-label="Create a post"
        className="text-base min-[600px]:text-[11px]"
        onChange={(event) => setValue(event.target.value)}
        placeholder={placeholder}
        value={value}
      />
      <button
        aria-label="Publish post"
        className={
          value.trim()
            ? "grid size-[25px] shrink-0 place-items-center rounded-full border-0 text-base group-focus-within:scale-100 group-focus-within:opacity-100 motion-safe:transition motion-safe:duration-200 scale-100 bg-[#1e6b52] text-white opacity-100"
            : "grid size-[25px] shrink-0 place-items-center rounded-full border-0 text-base group-focus-within:scale-100 group-focus-within:opacity-100 motion-safe:transition motion-safe:duration-200 scale-70 bg-transparent text-[#a3a7a5] opacity-0"
        }
        disabled={!value.trim()}
        type="submit"
      >
        {submitted ? "✓" : "↑"}
      </button>
    </form>
  );
}
