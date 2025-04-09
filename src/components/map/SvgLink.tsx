"use client";

import { ReactNode, TouchEvent, useState } from "react";
import { useRouter } from "next/navigation";

interface SvgLinkProps {
  href: string;
  children: ReactNode;
}

const SvgLink = ({ href, children }: SvgLinkProps) => {
  const router = useRouter();
  const [touchStart, setTouchStart] = useState({ x: 0, y: 0 });

  const handleTouchStart = (e: TouchEvent) => {
    const touch = e.touches[0];
    setTouchStart({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchEnd = (e: TouchEvent) => {
    const touch = e.changedTouches[0];
    const dx = Math.abs(touch.clientX - touchStart.x);
    const dy = Math.abs(touch.clientY - touchStart.y);

    // If touch moved significantly, assume it was a drag
    if (dx < 10 && dy < 10) {
      router.push(href);
    }
  };

  return (
    <a
      href={href}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ cursor: "pointer", pointerEvents: "all", zIndex: 10, position: "relative" }}
    >
      {children}
    </a>
  );
};

export default SvgLink;
