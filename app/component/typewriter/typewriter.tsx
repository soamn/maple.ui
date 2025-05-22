"use client";

import { useEffect, useRef } from "react";
import "@/app/styles/animations.css";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
}

export function TypewriterText({
  text,
  delay = 0.3,
  className = "",
}: TypewriterTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const words = text.split(" ");
      containerRef.current.innerHTML = "";

      words.forEach((word, index) => {
        const span = document.createElement("span");
        span.className = "word";
        span.textContent = word + " ";
        span.style.animationDelay = `${index * delay}s`;
        containerRef.current?.appendChild(span);
      });
    }
  }, [text, delay]);

  return (
    <div
      ref={containerRef}
      className={`bg-black w-full rounded-lg text-white font-sans flex flex-wrap gap-1 ${className}`}
    ></div>
  );
}
