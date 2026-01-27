"use client";

import dynamic from "next/dynamic";
import type React from "react";

const MagicCursor = dynamic(
  () => import("@/components/ui/magic-cursor").then((mod) => mod.MagicCursor),
  { ssr: false }
);

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MagicCursor />
      {children}
    </>
  );
}
