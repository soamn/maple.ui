import Codeblock from "@/app/components/codeblock";
import Preview from "@/app/components/preview";
import Tabs from "@/app/components/tabs";
import React from "react";

const page = () => {
  const srcDoc = `
  <!DOCTYPE html>
<html lang="en" class="h-full">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Sidebar</title>
     <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  <script src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js" defer></script>
  <script>
    // Polyfill for @click.outside if needed
    document.addEventListener('alpine:init', () => {
      Alpine.directive('click.outside', (el, { expression }, { effect, evaluateLater, cleanup }) => {
        let evaluate = evaluateLater(expression);
        let handler = event => {
          if (!el.contains(event.target)) {
            evaluate();
          }
        };
        document.addEventListener('click', handler);
        cleanup(() => document.removeEventListener('click', handler));
      });
    });
  </script>
</head>
<body
  x-data="{ open: false }"
  class="bg-white text-black border border-zinc-800 h-full w-full relative overflow-hidden"
>

  <!-- Sidebar -->
  <aside
    x-show="open"
    x-transition:enter="transition transform ease-out duration-500"
    x-transition:enter-start="-translate-x-full"
    x-transition:enter-end="translate-x-0"
    x-transition:leave="transition transform ease-in duration-500"
    x-transition:leave-start="translate-x-0"
    x-transition:leave-end="-translate-x-full"
    @click.outside="open = false"
    class="fixed top-0 left-0 w-52  h-full bg-white border-r border-zinc-800 z-20 shadow-lg flex flex-col"
    style="display: none;"
  >
    <div class="flex items-center justify-between px-4 py-3 border-b border-zinc-800">
      <div class="font-bold text-lg">Sidebar Header</div>
      <button
        @click="open = false"
        class="rounded cursor-pointer text-xl hover:text-red-600 transition"
        aria-label="Close sidebar"
      >✕</button>
    </div>

    <nav class="px-4 py-4 flex-grow text-black">
      <ul class="space-y-3">
        <li><a href="#" class="block px-2 py-1 rounded hover:bg-gray-200">Dashboard</a></li>
        <li><a href="#" class="block px-2 py-1 rounded hover:bg-gray-200">Profile</a></li>
        <li><a href="#" class="block px-2 py-1 rounded hover:bg-gray-200">Settings</a></li>
      </ul>
    </nav>
  </aside>

  <!-- Toggle button -->
  <button
    x-show="!open"
    x-transition
    @click="open = true"
    class="fixed top-4 left-2 z-10 cursor-pointer p-2 rounded  transition"
    aria-label="Open sidebar"
  >
    ☰
  </button>

  <!-- Main content -->
  <main
    class="h-full transition-all duration-500 p-6"
    :class="open ? 'ml-52' : 'ml-20'"
  >
    <h1 class="text-2xl font-bold mb-4">Main Content Area</h1>
    <p>
      This is your main page content. When the sidebar is open, this area shifts right.
    </p>
  </main>

</body>
</html>

    `;

  return (
    <div className="w-screen mx-auto px-4 py-10 max-w-3xl">
      <h1 className="text-3xl font-extabold ">Sidebar</h1>
      <p className="p-4">Sidebar for Dashboards</p>
      <Codeblock language="terminal">
        php artisan maple:install sidebar
      </Codeblock>
      <Tabs
        code={
          <Codeblock language="blade">
            {` <x-maple.sidebar color='bg-black' text="text-white" border="border-zinc-900">
        <x-slot name='header'>
            <span class="font-bold text-xl">Sidebar</span>
        </x-slot>

        <x-slot name="SidebarItems">
            <a href="#" class="block  px-3 py-2 rounded">Dashboard</a>
            <a href="#" class="block  px-3 py-2 rounded">Projects</a>
            <a href="#" class="block  px-3 py-2 rounded">Settings</a>
        </x-slot>


        <div class="p-6">
            <h1 class="text-3xl font-bold mb-4">Main Content</h1>
            <p>This content smoothly shifts when the sidebar opens or closes. Alpine.js manages the state.</p>
        </div>

 </x-maple.sidebar>`}
          </Codeblock>
        }
        preview={<Preview srcDoc={srcDoc} height={500} />}
      />
      <p className="text-3xl mb-5">Props</p>

      <p className="text-amber-200 bg-zinc-500 rounded w-fit">`color`</p>
      <p>
        Pass the tailwind class to set the background color{" "}
        <span className="text-amber-200">`bg-white`</span>
      </p>
      <p className="text-amber-200 bg-zinc-500 rounded w-fit">`text`</p>
      <p>
        Pass the tailwind class to set the text color{" "}
        <span className="text-amber-200">`text-black`</span>
      </p>
      <p className="text-amber-200 bg-zinc-500 rounded w-fit">`border`</p>
      <p className="mb-20">
        Pass the tailwind class to set the border color{" "}
        <span className="text-amber-200">`border-gray-500`</span>
      </p>
    </div>
  );
};

export default page;
