import Codeblock from "@/app/components/codeblock";
import Preview from "@/app/components/preview";
import Tabs from "@/app/components/tabs";
import React from "react";

const page = () => {
  const srcDoc = `
 <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Fade-in Words Animation</title>
<style>
body{
padding:90px
}
  .container {
    background-color: black;
    width: 100%; /* 40 * 0.25rem */
    border-radius: 0.5rem; /* rounded-lg */
    font-size:large;
    color: white;
    font-family: sans-serif;
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
  }

  .word {
    opacity: 0;
    filter: blur(4px);
    animation: fade-in 0.6s ease-out forwards;
    display: inline-block;
    line-height: 1.25;
  }

  @keyframes fade-in {
    to {
      opacity: 1;
      filter: blur(0);
    }
  }
</style>
</head>
<body>

<div class="container" id="container"></div>

<script>
  const text = "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character. ";
  const container = document.getElementById('container');

  const words = text.split(' ');

  words.forEach((word, index) => {
    const span = document.createElement('span');
    span.className = 'word';
    span.textContent = word;
    span.style.animationDelay = (index * 0.3) + 's';
    container.appendChild(span);
  });
</script>

</body>
</html>

    `;

  return (
    <div className="w-full  ">
      <h1 className="text-3xl font-extabold mb-5">Typewriter</h1>
      <p className="p-2">Text That comes in smoothly</p>
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
        preview={<Preview srcDoc={srcDoc} height={300} />}
      />
      <p className="text-3xl mb-5">Props</p>
      <p className="text-amber-200 bg-zinc-500 rounded w-fit">`text`</p>
      <p className="mb-20">String </p>
    </div>
  );
};

export default page;
