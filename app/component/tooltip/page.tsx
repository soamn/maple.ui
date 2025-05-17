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
  <title>Avatar Tooltip Stack</title>
  <script src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js" defer></script>
  <script src="https://cdn.tailwindcss.com"></script>
 
</head>
<body class=" flex justify-center items-center min-h-screen">

  <div class="flex -space-x-4 items-center">
    <!-- Example Item -->
    <div class="relative group" x-data="{ show: false, x: 0 }"
         @mouseenter="show = true"
         @mousemove="x = $event.offsetX - ($event.target.offsetWidth / 2)"
         @mouseleave="show = false">

    <div x-show="show"
     x-transition:enter="transition ease-out duration-150 "
     x-transition:enter-start="opacity-0 scale-90 translate-y-4"
     x-transition:enter-end="opacity-100 scale-100 translate-y-0"
     x-transition:leave="transition ease-in duration-100"
     x-transition:leave-start="opacity-100 scale-100 translate-y-0"
     x-transition:leave-end="opacity-0 scale-90 translate-y-2"
     x-bind:style="'rotate(' + (x / 6) + 'deg)'"
     class="absolute -top-16 left-1/2 -translate-x-1/2 z-50 bg-white text-black text-xs px-4 py-2 rounded shadow-lg whitespace-nowrap ">

        <div class="font-semibold text-sm min-w-fit w-20 text-center">John Doe</div>
        <div class="text-xs text-center">Engineer</div>
      </div>

      <img src="https://i.pravatar.cc/100?img=1"
           alt="John Doe"
           style="transform: rotate(6deg);"
           onmouseover="this.style.transform='rotate(0deg)'"
           onmouseout="this.style.transform='rotate(6deg)'"
           class="h-20 w-20 rounded-xl object-cover border-2 border-white cursor-pointer transition-transform duration-300 group-hover:scale-105 relative z-10" />
    </div>
    <div class="relative group" x-data="{ show: false, x: 0 }"
         @mouseenter="show = true"
         @mousemove="x = $event.offsetX - ($event.target.offsetWidth / 2)"
         @mouseleave="show = false">

     <div x-show="show"
     x-transition:enter="transition ease-out duration-150"
     x-transition:enter-start="opacity-0 scale-90 translate-y-4"
     x-transition:enter-end="opacity-100 scale-100 translate-y-0"
     x-transition:leave="transition ease-in duration-100"
     x-transition:leave-start="opacity-100 scale-100 translate-y-0"
     x-transition:leave-end="opacity-0 scale-90 translate-y-2"
     x-bind:style="'rotate(' + (x / 6) + 'deg)'"
     class="absolute -top-16 left-1/2 -translate-x-1/2 z-50 bg-white text-black text-xs px-4 py-2 rounded shadow-lg whitespace-nowrap ">

        <div class="font-semibold text-sm min-w-fit w-20 text-center">John Doe</div>
        <div class="text-xs text-center">Engineer</div>
      </div>

      <img src="https://images.pexels.com/photos/32041268/pexels-photo-32041268/free-photo-of-wild-rabbit-resting-on-lush-green-grass-in-spring.jpeg?auto=compress&cs=tinysrgb&w=600"
           alt="John Doe"
           style="transform: rotate(6deg);"
           onmouseover="this.style.transform='rotate(0deg)'"
           onmouseout="this.style.transform='rotate(6deg)'"
           class="h-20 w-20 rounded-xl object-cover border-2 border-white cursor-pointer transition-transform duration-300 group-hover:scale-105 relative z-10" />
    </div>
    <div class="relative group" x-data="{ show: false, x: 0 }"
         @mouseenter="show = true"
         @mousemove="x = $event.offsetX - ($event.target.offsetWidth / 2)"
         @mouseleave="show = false">

   <div x-show="show"
     x-transition:enter="transition ease-out duration-150"
     x-transition:enter-start="opacity-0 scale-90 translate-y-4"
     x-transition:enter-end="opacity-100 scale-100 translate-y-0"
     x-transition:leave="transition ease-in duration-100"
     x-transition:leave-start="opacity-100 scale-100 translate-y-0"
     x-transition:leave-end="opacity-0 scale-90 translate-y-2"
     x-bind:style="'rotate(' + (x / 6) + 'deg)'"
     class="absolute -top-16 left-1/2 -translate-x-1/2 z-50 bg-white text-black text-xs px-4 py-2 rounded shadow-lg whitespace-nowrap ">

        <div class="font-semibold text-sm min-w-fit w-20 text-center">John Doe</div>
        <div class="text-xs text-center">Engineer</div>
      </div>

      <img src="https://images.pexels.com/photos/5599049/pexels-photo-5599049.jpeg?auto=compress&cs=tinysrgb&w=600"
           alt="John Doe"
           style="transform: rotate(6deg);"
           onmouseover="this.style.transform='rotate(0deg)'"
           onmouseout="this.style.transform='rotate(6deg)'"
           class="h-20 w-20 rounded-xl object-cover border-2 border-white cursor-pointer transition-transform duration-300 group-hover:scale-105 relative z-10" />
    </div>

  </div>

</body>
</html>
`;

  return (
    <div className="w-full  ">
      <h1 className="text-3xl font-extabold mb-5">Tooltip</h1>
      <p className="p-2">Animated Tooltip</p>
      <Codeblock language="terminal">
        php artisan maple:install tooltip
      </Codeblock>
      <Tabs
        code={
          <Codeblock language="blade">
            {`  <x-maple.tooltip :items="[
     ['id' => 1, 'name' => 'Aman', 'designation' => 'Dev', 'image' => 'https://i.pravatar.cc/100?img=1'],
     ['id' => 2, 'name' => 'Jane', 'designation' => 'Designer', 'image' => 'https://i.pravatar.cc/100?img=2'],
     ['id' => 3, 'name' => 'John', 'designation' => 'PM', 'image' => 'https://i.pravatar.cc/100?img=3'],]"
 tooltipWidth='fit' />
     `}
          </Codeblock>
        }
        preview={<Preview srcDoc={srcDoc} height={500} />}
      />
      <p className="text-3xl mb-5">Props</p>
      <p className="text-amber-200 bg-zinc-500 rounded w-fit">
        `tooltipBackground`
      </p>
      <p className="mb-5">Background color of the tooltip card</p>
      <p className="text-amber-200 bg-zinc-500 rounded w-fit">`tooltipText`</p>
      <p className="mb-5">Text color of the tooltip card</p>
      <p className="text-amber-200 bg-zinc-500 rounded w-fit">`tooltipWidth`</p>
      <p className="mb-20">width of the tooltip card</p>
    </div>
  );
};

export default page;
