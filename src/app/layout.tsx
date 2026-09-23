import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Expert Listing",
  description: "Expert Listing Assessment",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="m-0 flex min-h-full flex-col bg-[#f7f7f5] font-['Open_Runde',Arial,Helvetica,sans-serif] text-[12px] text-[#2a2d2c] min-[600px]:bg-[#edf0ed] [&_button]:cursor-pointer [&_button:disabled]:cursor-default [&_button:focus-visible]:outline-2 [&_button:focus-visible]:outline-offset-2 [&_button:focus-visible]:outline-[#5d9c40] motion-safe:[&_button]:transition-[transform,background,color] motion-safe:[&_button]:duration-150 motion-safe:[&_button:active]:scale-[0.94]">
        {children}
      </body>
    </html>
  );
}
