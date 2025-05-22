"use client";
import { useEffect } from "react";
import Prism from "prismjs";

import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-markup";
import "prismjs/themes/prism-tomorrow.css";

type Props = {
  language: "js" | "ts" | "html" | "blade" | "terminal";
  children: string;
};

export default function Codeblock({ language, children }: Props) {
  useEffect(() => {
    Prism.highlightAll();
  }, [children]);

  const prismLang = language === "blade" ? "markup" : language;
  return (
    <div className={" rounded-lg  w-full overflow-auto max-w-400  max-h-120 "}>
      <div className="text-xs text-gray-400 mb-2">{language.toUpperCase()}</div>
      <pre className=" leading-relaxed text-wrap">
        <code className={`language-${prismLang} `}>{children}</code>{" "}
      </pre>
    </div>
  );
}
