import { type ReactNode } from "react";
import "../styles/globals.css";

export default function GlobalLayout({ children }: { children: ReactNode }) {
 
  return (
    <html>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className="font-manrope">{children}</body>
    </html>
  );
}
