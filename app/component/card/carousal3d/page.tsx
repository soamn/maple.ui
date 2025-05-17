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
  <title>3D Carousel</title>
  <script src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js" defer></script>
  <script>
    function carousel3D({ items, distance }) {
      return {
        angle: 0,
        interval: null,
        isDragging: false,
        startX: 0,
        currentX: 0,
        rotateStep: 360 / items,

        startAutoRotate(rotate) {
          if (rotate) {
            this.interval = setInterval(() => {
              this.angle += this.rotateStep;
            }, 3000);
          }
        },

        stopAutoRotate() {
          clearInterval(this.interval);
        },

        startDrag(event) {
          this.stopAutoRotate();
          this.isDragging = true;
          this.startX = event.type.includes('touch') ? event.touches[0].clientX : event.clientX;
        },

        onDrag(event) {
          if (!this.isDragging) return;
          this.currentX = event.type.includes('touch') ? event.touches[0].clientX : event.clientX;
          const deltaX = this.currentX - this.startX;
          this.angle += deltaX * 0.3;
          this.startX = this.currentX;
        },

        endDrag(rotate) {
          this.isDragging = false;
         
        }
      }
    }
  </script>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    html, body {
      margin: 0;
      padding: 0;
    }

    .transform-3d {
      transform-style: preserve-3d;
    }
  </style>
</head>
<body class="flex items-center bg-black min-h-screen overflow-hidden">
  <div
    x-data="carousel3D({ items: 8, distance: 1900 })"
    x-init="startAutoRotate(false)"
    @mousedown="startDrag($event)" @mousemove="onDrag($event)"
    @mouseup="endDrag(true)" @mouseleave="endDrag(true)"
    @touchstart="startDrag($event)" @touchmove="onDrag($event)" @touchend="endDrag(true)"
    class="w-full h-fit overflow-hidden relative flex items-center select-none cursor-pointer"
  >
    <div x-ref="slider" class="relative w-80 h-[520px]" style="left: calc(50% - 160px); perspective: 1000px;">
      <div
        class="w-full h-full relative transform-3d transition-transform duration-500 ease-out"
        :style="'transform: rotateY(' + angle + 'deg)'"
      >
        <!-- Cards -->
        <template x-for="(item, index) in 8" :key="index">
          <div
            class="absolute inset-0"
            :style="'transform: rotateY(' + (index * 45) + 'deg) translateZ(1200px);'"
          >
            <div class="w-full h-full flex items-center justify-center rounded-lg shadow-xl overflow-hidden">
              <img
                :src="[
                  'https://images.pexels.com/photos/2088210/pexels-photo-2088210.jpeg',
                  'https://images.pexels.com/photos/2253573/pexels-photo-2253573.jpeg',
                  'https://images.pexels.com/photos/2253573/pexels-photo-2253573.jpeg',
                  'https://images.pexels.com/photos/1906794/pexels-photo-1906794.jpeg',
                  'https://images.pexels.com/photos/1906794/pexels-photo-1906794.jpeg',
                  'https://images.pexels.com/photos/32094012/pexels-photo-32094012/free-photo-of-tall-birch-tree-on-a-sunny-hillside.jpeg',
                  'https://images.pexels.com/photos/2240137/pexels-photo-2240137.jpeg',
                  'https://images.pexels.com/photos/62636/pexels-photo-62636.jpeg'
                ][index]"
                alt="carousel image"
                class="object-cover w-full h-full rounded-lg border-8 border-white"
              />
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>

</body>
</html>
`;

  return (
    <div className="w-full  ">
      <h1 className="text-3xl font-extabold mb-5">Carousal 3d</h1>
      <p className="p-2">3d carousal with perspective depth</p>
      <Codeblock language="terminal">
        php artisan maple:install card/carousal3d
      </Codeblock>
      <Tabs
        code={
          <Codeblock language="blade">
            {`  
<x-maple.card.carousal3d :items="[
        [  
            'id' => 1,
            'image' =>
            'https://images.pexels.com/photos/2088210/pexels-photo-2088210.jpeg?auto=compress&cs=tinysrgb&w=600',
        ],
        [
            'id' => 2,
            'image' => 
            'https://images.pexels.com/photos/2253573/pexels-photo-2253573.jpeg?auto=compress&cs=tinysrgb&w=600',
        ],
        [
            'id' => 3,
            'image' => 
            'https://images.pexels.com/photos/2253573/pexels-photo-2253573.jpeg?auto=compress&cs=tinysrgb&w=600',
        ],
        [
            'id' => 4,
            'image' =>
                'https://images.pexels.com/photos/1906794/pexels-photo-1906794.jpeg?auto=compress&cs=tinysrgb&w=600',
        ],
        [
            'id' => 5,
            'image' =>
            'https://images.pexels.com/photos/1906794/pexels-photo-1906794.jpeg?auto=compress&cs=tinysrgb&w=600',
        ],
        [
            'id' => 6,
            'image' =>
            'https://images.pexels.com/photos/32094012/pexels-photo-32094012/free-photo-of-tall-birch-tree-on-a-sunny-hillside.jpeg?auto=compress&cs=tinysrgb&w=600',
        ],
        [
            'id' => 7,
            'image' =>
            'https://images.pexels.com/photos/2240137/pexels-photo-2240137.jpeg?auto=compress&cs=tinysrgb&w=600',
        ],
        [
            'id' => 8,
            'image' => 
            'https://images.pexels.com/photos/62636/pexels-photo-62636.jpeg?auto=compress&cs=tinysrgb&w=600',
        ],
 ]" />
            `}
          </Codeblock>
        }
        preview={<Preview srcDoc={srcDoc} height={800} />}
      />
      <p className="text-3xl mb-5">Props</p>
      <p className="text-amber-200 bg-zinc-500 rounded w-fit">`autoRotate`</p>
      <Codeblock language="blade">{`<x-maple.card.carousal3d autoRotate .../>`}</Codeblock>
      <p className="mb-20">
        Auto Rotates the carousal after certain interval, and after each drag
        end
      </p>
    </div>
  );
};

export default page;
