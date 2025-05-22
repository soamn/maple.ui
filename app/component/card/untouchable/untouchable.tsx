"use client";

import type React from "react";

import { useState } from "react";
import "@/app/styles/animations.css";

interface TiltCardProps {
  image: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export function TiltCard({
  image,
  title = "Untouchable",
  subtitle = "Touch me if you can",
  className = "",
}: TiltCardProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateMax = 10;

    setRotation({
      y: ((x - centerX) / centerX) * rotateMax,
      x: -((y - centerY) / centerY) * rotateMax,
    });
  };

  const resetRotation = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={resetRotation}
      className={`w-40 h-60 p-1 rounded-lg shadow-lg transition-transform duration-600 cursor-pointer
                bg-gradient-to-r from-zinc-800 via-zinc-500 to-white relative group ${className}`}
      style={{
        transform: `perspective(600px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
      }}
    >
      <div className="absolute bg-black text-white bottom-2 left-2 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-500">
        <p className="text-lg">{title}</p>
        <p className="text-sm">{subtitle}</p>
      </div>
      <img
        src={image || "/placeholder.svg"}
        className="object-cover w-full h-full select-none rounded-lg"
        alt={title}
      />
    </div>
  );
}
