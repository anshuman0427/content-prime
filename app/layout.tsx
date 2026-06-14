import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Filter Bypass — Indian Memes, News & Politics, Unfiltered",
  description:
    "The Indian internet's best stuff, the stuff the algorithm buries. Memes, infotainment, news and politics — curated daily, sent straight to your phone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
