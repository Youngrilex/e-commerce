"use client";
import type { Metadata } from "next";
import { Playfair } from "next/font/google";
import "./globals.css";
import { PropsWithChildren } from "react";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import { store } from "@/lib/redux/store";
import { Provider } from "react-redux";
import Head from "next/head";

const playfair = Playfair({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "AkinTech",
  description: "Explore the latest tech gadgets at AkinTech",
  openGraph: {
    title: "AkinTech - Latest Tech Gadgets",
    description: "Explore the latest tech gadgets at AkinTech.",
    url: "https://akintech.vercel.app",
    type: "website",
    images: [
      {
        url: "https://akintech.vercel/public/akintech.png",
        width: 800,
        height: 600,
        alt: "AkinTech - Tech Gadgets",
      },
    ],
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <Head>
      <title>AkinTech</title>
      <meta name="description" content='Explore the latest tech gadgets at AkinTech.' />
        <meta name="keywords" content="tech, gadgets, smartwatches, earbuds" />
        <meta name="author" content="AkinTech" />
        <meta property="og:title" content='AkinTech - Latest Tech Gadgets' />
        <meta property="og:description" content={metadata.openGraph?.description} />
        <meta property="og:url" content="https://akintech.vercel.app"/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content='https://akintech.vercel/public/akintech.png' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={playfair.className}>
        <Provider store={store}>
          <Navbar />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={true}
            closeOnClick
          />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
