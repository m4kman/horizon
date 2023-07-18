import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/home/Hero";
import Category from "./components/home/Category";
import Info from "./components/home/Info";

export default function App() {
  return (
    <div className="px-[3.81rem]">
      <Navbar />
      <Hero />
      <Category />
      <Info />
    </div>
  );
}
