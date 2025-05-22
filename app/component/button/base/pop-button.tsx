"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

import "@/app/styles/animations.css";

interface PopButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function PopButton({ children, className, onClick }: PopButtonProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    if (onClick) onClick();
  };

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        setIsClicked(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isClicked]);

  return (
    <button
      onClick={handleClick}
      className={cn(
        "bg-white text-black px-4 py-2 rounded-md focus:outline-none transition duration-900 ease-in-out cursor-pointer hover:shadow-xl shadow-black",
        isClicked && "animate-pop",
        className
      )}
    >
      {children}
    </button>
  );
}
