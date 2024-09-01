"use client";
import Navbar from "@/components/navbar"; // Adjust the path if needed
import HeroSection from "@/components/hero"; // Adjust the path if needed
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import FeauturedProducts from "@/components/FeauturedProducts";
import Contact from "../../components/contact";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeauturedProducts />
      <Testimonials />
      <Contact />
    </>
  );
};

export default HomePage;
