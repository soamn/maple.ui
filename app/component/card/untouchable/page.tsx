import Codeblock from "@/app/components/codeblock";
import Preview from "@/app/components/preview";
import Tabs from "@/app/components/tabs";
import React from "react";
import { TiltCard } from "./untouchable";

const page = () => {
  return (
    <div className="w-screen mx-auto px-4 py-10 max-w-3xl">
      <h1 className="text-3xl font-extabold ">Untouchable Card</h1>
      <p className="p-4">A card that shies away from the cursor</p>
      <Codeblock language="terminal">
        php artisan maple:install card/untouchable
      </Codeblock>
      <Tabs
        code={
          <Codeblock language="blade">
            {`<x-maple.card.untouchable maxRotation=20 class="">
        <div
            class="absolute bg-black  text-white bottom-2 
             left-2 invisible opacity-0 group-hover:opacity-100
              group-hover:visible transisition-all duration-500">

            <p class="text-lg">Untouchable</p>
            <p class="text-sm">Touch me if you can</p>
        </div>
        <img src=
        'https://images.pexels.com/photos/31886202/pexels-photo-31886202/free-photo-of-black-and-white-portrait-of-pensive-woman.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            class="object-cover w-full h-full select-none rounded-lg " alt="">
</x-maple.card.untouchable>
     `}
          </Codeblock>
        }
        preview={
          <div className="flex justify-center">
            <TiltCard
              image="https://images.pexels.com/photos/31886202/pexels-photo-31886202/free-photo-of-black-and-white-portrait-of-pensive-woman.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              title="Untouchable"
              subtitle="Touch me if you can"
            />
          </div>
        }
      />
      <p className="text-3xl mb-5">Props</p>
      <p className="text-amber-200 bg-zinc-500 rounded w-fit">`maxRotation`</p>
      <p className="mb-20">How much the card is skewed on hover.</p>
    </div>
  );
};

export default page;
