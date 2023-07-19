import React from "react";
import ProductType from "./products/ProductType";
import ProductInfo from "./products/ProductInfo";

export default function Products(props) {
  return (
    <div>
      <div className="mt-[3.75rem] flex gap-16 text-center">
        <ProductType text="Mattress Tape" />
        <ProductType text="Twill Tape" />
        <ProductType text="Draw Cords" />
        <ProductType text="Bungee Cords" />
      </div>
      <ProductInfo
        name={props.name}
        infoArray={props.infoArray}
        img={props.img}
      />
    </div>
  );
}
