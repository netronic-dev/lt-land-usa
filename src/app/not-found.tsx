"use client";

import { ErrorComp } from "@/components/ErrorComp";

export default function NotFoundPage() {
  return (
    <div className="bg-[#010307]">
      <ErrorComp variant="notFound" onClick={() => window.history.back()} />
    </div>
  );
}
