"use client"
import type { Metadata } from "next";
import {  Playfair } from "next/font/google";
import "./globals.css";
import { PropsWithChildren } from "react";

import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";

const playfair = Playfair({ subsets: ["latin"] });

 const metadata: Metadata = {
  title: "AkinTech",
  description: "Explore the latest tech gadgets at AkinTech",
};

export default function RootLayout({
  children,
}:PropsWithChildren) {
  return (
    <html lang="en">
      <body className={playfair.className}>      
         <Navbar />
           {children}
           <Footer/>
        </body>
    </html>
  );
}
