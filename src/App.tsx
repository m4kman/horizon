import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/home/Hero";
import Category from "./components/home/Category";
import Info from "./components/home/Info";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="px-[3.81rem]">
      <Navbar />
      <Hero />
      <Category />
      <Info />
      <Contact />
      <Footer />
    </div>
  );
}
