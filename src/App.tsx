import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Layout from "./components/Layout";
import mattressImg from "./assets/mattress.png";
import twillImg from "./assets/twill.png";
import drawcordsImg from "./assets/drawcords.png";
import bungeeImg from "./assets/bungee.png";

export default function App() {
  return (
    <BrowserRouter>
      <div className="px-[4rem] font-main">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/products"
              element={
                <Products
                  name="Mattress Tape"
                  infoArray={[
                    "Mattress tape is a fabric strip.",
                    "It is used to reinforce the edges of mattresses.",
                    "Provides stability and durability to the mattress.",
                    "Helps maintain the shape and structure of the mattress.",
                    "Adds a decorative touch to the appearance of the mattress.",
                  ]}
                  img={mattressImg}
                />
              }
            />
            <Route
              path="/products/twill"
              element={
                <Products
                  name="Twill Tape"
                  infoArray={[
                    "Twill tape is a narrow, flat woven fabric strip with a distinctive diagonal pattern.",
                    "It is durable and resistant to tearing and fraying.",
                    "Available in various widths and colors.",
                    "Used in sewing and crafts as a stabilizer, tie, or drawstring.",
                    "Popular for apron strings and ties in culinary garments.",
                  ]}
                  img={twillImg}
                />
              }
            />
            <Route
              path="/products/drawcords"
              element={
                <Products
                  name="Draw Cords"
                  infoArray={[
                    "Flexible cords for cinching clothing and accessories.",
                    "Common in hoods, waistbands, and bags.",
                    "Available in various lengths and colors.",
                    "Used in sportswear and activewear too.",
                    "Adjustable and customizable cords.",
                  ]}
                  img={drawcordsImg}
                />
              }
            />
            <Route
              path="/products/bungee"
              element={
                <Products
                  name="Bungee Cords"
                  infoArray={[
                    "Elastic cords with stretch and recoil capabilities.",
                    "Feature hooks or clips for easy attachment.",
                    "Used for securing, bundling, and fastening items.",
                    "Ideal for camping, luggage, and outdoor activities.",
                    "Offer a strong and reliable grip.",
                  ]}
                  img={bungeeImg}
                />
              }
            />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
