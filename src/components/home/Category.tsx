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
        <div>
          <img src={imageOne} alt="Mattress Tape" />
          <h1 className="mt-9 text-center text-2xl font-semibold">
            Mattress Tape
          </h1>
        </div>
        <div>
          <img src={imageTwo} alt="Twill Tape" />
          <h1 className="mt-9 text-center text-2xl font-semibold">
            Twill Tape
          </h1>
        </div>
        <div>
          <img src={imageThree} alt="Drawcords" />
          <h1 className="mt-9 text-center text-2xl font-semibold">Drawcords</h1>
        </div>
        <div>
          <img src={imageFour} alt="Bungee Cords" />
          <h1 className="mt-9 text-center text-2xl font-semibold">
            Bungee Cords
          </h1>
        </div>
      </div>
    </div>
  );
}
