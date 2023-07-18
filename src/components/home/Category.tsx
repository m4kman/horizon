import React from "react";
import imageOne from "../../assets/Image1.png";
import imageTwo from "../../assets/Image2.png";
import imageThree from "../../assets/image3.png";
import imageFour from "../../assets/image4.png";

export default function Category() {
  return (
    <div className="mt-[9.5rem] flex flex-col items-center font-main">
      <h1 className="text-[2.5rem] font-semibold">Categories</h1>
      <p className="mt-[1.25rem] text-2xl">
        We specialize in manufacturing the following types of products.
      </p>
      <div className="mt-[6rem] flex gap-9">
        <span>
          <img src={imageOne} alt="Mattress Tape" />
        </span>
        <span>
          <img src={imageTwo} alt="Twill Tape" />
        </span>
        <span>
          <img src={imageThree} alt="Drawcords" />
        </span>
        <span>
          <img src={imageFour} alt="Bungee Cords" />
        </span>
      </div>
    </div>
  );
}
