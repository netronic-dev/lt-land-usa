import { type ReactNode } from "react";
import "../styles/globals.css";

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
