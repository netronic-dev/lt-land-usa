"use client";

import { ErrorComp } from "@/components/ErrorComp";

export default function NotFoundPage() {
  return (
      <ErrorComp variant="notFound" onClick={() => window.history.back()} />
  );
}
