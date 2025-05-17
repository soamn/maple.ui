// app/page.tsx or pages/index.tsx
import Image from "next/image";
import "./globals.css"; // Ensure custom CSS for gradient animation is loaded

export default function Home() {
  return (
    <div className="min-h-screen  flex  ml-40 px-6">
      <div className="max-w-3xl text-center space-y-6">
        <h1
          className="text-7xl md:text-8xl font-bold bg-gradient-to-tr from-pink-100 via-red-400 to-black 
          bg-clip-text text-transparent animate-gradient"
        >
          Maple
        </h1>

        <p className="text-lg md:text-xl text-amber-100 leading-relaxed">
          Welcome to <span className="font-semibold">Maple Ui</span> — A ui
          library for Laravel/Blade that you were always looking for, Get
          beautiful Animated components for your Larvel project
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-white  text-black px-6 py-3 rounded-full text-lg transition hover:scale-98 duration-300">
            <a href="/installation">Getting Started</a>
          </button>
          <button className="border border-white text-white  px-6 py-3 rounded-full text-lg transition hover:scale-96 duration-300">
            <a href="https://github.com/soamn/maple">Github</a>
          </button>
        </div>
      </div>
    </div>
  );
}
