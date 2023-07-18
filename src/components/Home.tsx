import React from "react";
import Navbar from "./Navbar";
import Hero from "./home/Hero";
import Category from "./home/Category";
import Info from "./home/Info";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home() {
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
