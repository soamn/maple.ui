import type { Metadata } from "next";
import Header from "./components/header";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/sidebar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maple",
  description: "Ui library for laravel blade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-zinc-900   overflow-x-clip text-white  `}
      >
        <Header />
        <SidebarProvider>
          <AppSidebar />
          <main className="mt-20 md:pl-[9rem] md:pr-[7rem]">
            <SidebarTrigger className="text-white hover:bg-transparent hover:text-white lg:hidden " />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
