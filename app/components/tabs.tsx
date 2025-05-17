"use client";

import { useState } from "react";

type Props = {
  preview: React.ReactNode;
  code: React.ReactNode;
  tabLabels?: [string, string];
};

const Tabs = ({ preview, code, tabLabels = ["Preview", "Code"] }: Props) => {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  return (
    <div className="w-full max-w-4xl rounded-lg p-4 bg-zinc-950">
      {/* Tabs */}
      <div className="flex border-b border-zinc-700">
        <button
          className={`px-4 py-2 text-sm font-medium cursor-pointer transition-all ${
            activeTab === "preview"
              ? "text-white border-b-2 border-white"
              : "text-zinc-400"
          }`}
          onClick={() => setActiveTab("preview")}
        >
          {tabLabels[0]}
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium cursor-pointer transition-all ${
            activeTab === "code"
              ? "text-white border-b-2 border-white"
              : "text-zinc-400"
          }`}
          onClick={() => setActiveTab("code")}
        >
          {tabLabels[1]}
        </button>
      </div>

      <div className="p-4">{activeTab === "preview" ? preview : code}</div>
    </div>
  );
};

export default Tabs;
