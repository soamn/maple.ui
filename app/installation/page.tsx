import React from "react";
import Codeblock from "../components/codeblock";

const page = () => {
  return (
    <div className="p-5">
      <h1 className="font-bold text-5xl">Installation</h1>
      <div className="ml-4">
        <p className=" text-lg mt-4">Steps</p>
        <p className="ml-6 mt-5 ">Add Alpine.js</p>
        <Codeblock language="terminal">{`<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>`}</Codeblock>
        <p className="ml-6 mt-5 ">Run the install command </p>
        <Codeblock language="terminal">{`composer require soamn/maple`}</Codeblock>
        <p className="ml-6 mt-5 ">Add a component </p>
        <Codeblock language="terminal">{` php artisan maple:install card/untouchable`}</Codeblock>
        <p className="ml-6 mt-5 ">Use the component in your project</p>
        <Codeblock language="blade">
          {` <x-maple.card.untouchable maxRotation=20 class="">
        <div class="absolute bg-black 
        text-white bottom-2 left-2 invisible opacity-0 group-hover:opacity-100
        group-hover:visible transisition-all duration-500">
        <p class="text-lg">Untouchable</p>
        <p class="text-sm">Touch me if you can</p>
        </div>
        <img src="image/..."
        class="object-cover w-full h-full select-none rounded-lg " alt="">
 </x-maple.card.untouchable>`}
        </Codeblock>
      </div>
    </div>
  );
};

export default page;
