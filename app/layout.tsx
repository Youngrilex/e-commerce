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

const playfair = Playfair({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "AkinTech",
  description: "Explore the latest tech gadgets at AkinTech",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
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
