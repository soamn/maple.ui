"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const ActiveLink = ({ href, children, className }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${className}
        "text-sm hover:underline underline-offset-4 transition-colors
        ${isActive ? "text-pink-300 " : "text-gray-500"}
      `}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
