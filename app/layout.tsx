"use client"
import type { Metadata } from "next";
import {  Playfair } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { persistor, store } from "@/lib/redux/store";
import { PropsWithChildren } from "react";
import { PersistGate } from 'redux-persist/integration/react';
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
        <Provider store={store}>
         <PersistGate   loading={null} persistor={persistor}> 
         <Navbar />
           {children}
           <Footer/>
           </PersistGate> 

        </Provider>
        </body>
    </html>
  );
}
