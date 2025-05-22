import Codeblock from "@/app/components/codeblock";
import Preview from "@/app/components/preview";
import Tabs from "@/app/components/tabs";
import React from "react";
import { TypewriterText } from "./typewriter";

const page = () => {
  const text =
    "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.";
  return (
    <div className="w-screen mx-auto px-4 py-10 max-w-3xl">
      <h1 className="text-3xl font-extabold ">Typewriter</h1>
      <p className="p-4">Text That comes in smoothly</p>
      <Codeblock language="terminal">
        php artisan maple:install typewriter
      </Codeblock>
      <Tabs
        code={
          <Codeblock language="blade">
            {`<x-maple.typewriter class="w-100" text="I have a dream that my four little
children will one day live in a nation where they will not be judged by the
color of their skin but by the content of their character."
" />`}
          </Codeblock>
        }
        preview={<TypewriterText text={text} delay={0.3} className="p-4" />}
      />
      <p className="text-3xl mb-5">Props</p>
      <p className="text-amber-200 bg-zinc-500 rounded w-fit">`text`</p>
      <p className="mb-20">String </p>
    </div>
  );
};

export default page;
