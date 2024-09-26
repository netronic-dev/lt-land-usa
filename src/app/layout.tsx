import { type ReactNode } from "react";
import "../styles/globals.css";

export default async function GlobalLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className="font-manrope">{children}</body>
    </html>
  );
}
