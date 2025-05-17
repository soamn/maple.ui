"use client";

import React from "react";

type PreviewProps = {
  srcDoc: string;
  className?: string;
  height?: number | string;
};

const Preview = ({ srcDoc, className = "", height = 400 }: PreviewProps) => {
  return (
    <div
      className={`m-auto flex justify-center flex-col w-full   ${className}`}
    >
      <iframe
        srcDoc={srcDoc}
        className="rounded-lg border border-zinc-800 shadow-md "
        style={{ width: "100%", height }}
      />
    </div>
  );
};

export default Preview;
