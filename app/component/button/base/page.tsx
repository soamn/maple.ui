import Codeblock from "@/app/components/codeblock";
import Tabs from "@/app/components/tabs";
import React from "react";
import { PopButton } from "./pop-button";

const page = () => {
  return (
    <div className="w-screen  max-w-3xl mx-auto px-4 py-10 ">
      <h1 className="text-3xl font-extabold mb-5">Base Button</h1>
      <Codeblock language="terminal">
        php artisan maple:install button/base
      </Codeblock>
      <Tabs
        code={
          <Codeblock language="blade">
            {`  <x-maple.button.base> Button </x-maple.button.base>`}
          </Codeblock>
        }
        preview={
          <div className="flex justify-center w-full bg-black p-2 rounded-lg">
            <PopButton>Click Me</PopButton>
          </div>
        }
      />
    </div>
  );
};

export default page;
