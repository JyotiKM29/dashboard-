import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard",
  description: "Created by jyoti",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <div className="grid grid-cols-12 h-screen bg-indigo-100">
      <div className="col-start-1 row-start-1 col-end-13 overflow-y-auto w-full h-full p-8 pl-16">
        <main className="w-full bg-stone-100 rounded-lg shadow-2xl">
          {children}
        </main>
      </div>
      <div className="col-start-1 col-end-2 row-start-1 flex items-center justify-center">
        <Sidebar />
      </div>
    </div>
  </html>
  
  );
}
