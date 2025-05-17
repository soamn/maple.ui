import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./components/sidebar";
import Header from "./components/header";

export const metadata: Metadata = {
  title: "Maple",
  description: "Dashboard UI with Sidebar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased  ml-40  overflow-x-clip `}>
        <Header />
        <div className="flex mt-30  border-white">
          <Sidebar />
          <main className="flex-1   text-white mt-5">{children}</main>
        </div>
      </body>
    </html>
  );
}
