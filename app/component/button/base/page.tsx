import Codeblock from "@/app/components/codeblock";
import Preview from "@/app/components/preview";
import Tabs from "@/app/components/tabs";
import React from "react";

const page = () => {
  const srcDoc = `
 <!DOCTYPE html>
  <html lang='en'>
  <head>
  <meta charset='UTF-8' />
  <script src='https://unpkg.com/alpinejs' defer></script>
  <script src='https://cdn.tailwindcss.com'></script>
  <style>
  @keyframes pop {
      0% {
          transform: scale(1);
          }
          50% {
              transform: scale(0.9);
              }
              100% {
                  transform: scale(1);
                  }
                  }
                  
                  .animate-pop {
                      animation: pop 0.3s ease-in-out;
                      }
                      </style>
</head>
<body class=' flex justify-center items-center min-h-screen'>
<button
x-data='{ isClicked: false }'
x-on:click='isClicked = !isClicked; setTimeout(() => isClicked = false, 300)'
x-bind:class='{ &quot;animate-pop&quot;: isClicked }'
class='bg-white text-black px-4 py-2 rounded-md 
focus:outline-none transition duration-900 
ease-in-out cursor-pointer hover:shadow-xl shadow-white'
>
Button
</button>
</body>
</html>`;

  return (
    <div className="w-full  ">
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
        preview={<Preview srcDoc={srcDoc} height={300} />}
      />
    </div>
  );
};

export default page;
