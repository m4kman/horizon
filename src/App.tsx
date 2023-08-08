import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Layout from "./components/Layout";
import { mattressArray } from "./images";
import { twillArray } from "./images";
import { drawcordArray } from "./images";
import { bungeeArray } from "./images";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="px-[4rem] font-main">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/products/mattress"
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
                  img={mattressArray}
                />
              }
            />
            <Route
              path="/products/twill"
              element={
                <Products
                  name="Twill Tape"
                  infoArray={[
                    "Twill tape is a flat, woven fabric with a diagonal pattern.",
                    "It is durable and resistant to tearing and fraying.",
                    "Available in various widths and colors.",
                    "Used in sewing and crafts as a stabilizer, tie, or drawstring.",
                    "Popular for apron strings and ties in culinary garments.",
                  ]}
                  img={twillArray}
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
                  img={drawcordArray}
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
                  img={bungeeArray}
                />
              }
            />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
