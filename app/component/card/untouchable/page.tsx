import Codeblock from "@/app/components/codeblock";
import Preview from "@/app/components/preview";
import Tabs from "@/app/components/tabs";
import React from "react";

const page = () => {
  const srcDoc = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>3D Tilt Card</title>
  <script src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js" defer></script>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    html, body {
      margin: 0;
      padding: 0;
    }
  </style>
</head>
<body class="min-h-screen flex items-center justify-center">

  <div class="h-fit m-20 flex items-center justify-center">
    <div
      x-data="{
        rotateX: 0,
        rotateY: 0,
        handleMouseMove(e) {
          const card = e.currentTarget;
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateMax = 10;
          this.rotateY = ((x - centerX) / centerX) * rotateMax;
          this.rotateX = -((y - centerY) / centerY) * rotateMax;
        },
        resetRotation() {
          this.rotateX = 0;
          this.rotateY = 0;
        }
      }"
      @mousemove="handleMouseMove"
      @mouseleave="resetRotation"
      class="w-40 h-60 p-1 rounded-lg shadow-lg transition-transform duration-600 cursor-pointer
             bg-gradient-to-r from-zinc-800 via-zinc-500 to-white relative group"
      :style="'transform: perspective(600px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)'"
    >
         <div
            class="absolute bg-black  text-white bottom-2  left-2 invisible opacity-0 group-hover:opacity-100 group-hover:visible transisition-all duration-500">
            <p class="text-lg">Untouchable</p>
            <p class="text-sm">Touch me if you can</p>
        </div>
        <img src=
        'https://images.pexels.com/photos/31886202/pexels-photo-31886202/free-photo-of-black-and-white-portrait-of-pensive-woman.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            class="object-cover w-full h-full select-none rounded-lg " alt="">
    </div>
  </div>

</body>
</html>

`;

  return (
    <div className="w-full  ">
      <h1 className="text-3xl font-extabold mb-5">Untouchable Card</h1>
      <p className="p-2">A card that shies away from the cursor</p>
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
        preview={<Preview srcDoc={srcDoc} height={500} />}
      />
      <p className="text-3xl mb-5">Props</p>
      <p className="text-amber-200 bg-zinc-500 rounded w-fit">`maxRotation`</p>
      <p className="mb-20">How much the card is skewed on hover.</p>
    </div>
  );
};

export default page;
