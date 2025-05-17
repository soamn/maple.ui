"use client";
import { useState, useRef, useEffect } from "react";
import ActiveLink from "./activelink";

type DropdownItem = {
  label: string;
  href: string;
};

type DropdownProps = {
  label: string;
  items: DropdownItem[];
};

export default function Dropdown({ label, items }: DropdownProps) {
  const [open, setOpen] = useState(true);

  return (
    <div className="relative inline-block text-left ">
      <button
        onClick={() => setOpen(!open)}
        className={`inline-flex items-center  cursor-pointer gap-3 text-lg w-40
          py-2  font-medium rounded-md  focus:outline-non`}
      >
        <p
          className={`${
            open === false ? "text-md hover:underline" : "text-white"
          }`}
        >
          {label}
        </p>
      </button>

      {open && (
        <div className="  w-40 ">
          {items.map((item, idx) => (
            <ActiveLink
              key={idx}
              href={item.href}
              className="block py-1  text-sm hover:underline"
            >
              {item.label}
            </ActiveLink>
          ))}
        </div>
      )}
    </div>
  );
}
