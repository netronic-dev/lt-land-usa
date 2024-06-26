import type { Metadata } from "next";
import "../styles/globals.css";
import { Icons } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Lasertag",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-manrope">
        <Icons />
        {children}
      </body>
    </html>
  );
}
