import React from "react";
import graphicImage from "../../../assets/about2.png";
import Button from "../../Button";

export default function Customization() {
  return (
    <div className="flex">
      <div className="max-w-[50rem]">
        <img src={graphicImage} alt="Graphic Image" />
      </div>
      <div className="ml-[10rem]">
        <p className="text-xl font-bold leading-8 text-[#8878B7]">
          putting your needs first!
        </p>
        <h1 className="text-[2.5rem] font-semibold">Customization</h1>
        <ul className="mb-[2.7rem] ml-8 mt-[1.85rem] list-image-polygon text-2xl leading-[2.5rem]">
          <li className="mb-1 pl-2">
            Choose the type of rubber strip, tape, or cord.
          </li>
          <li className="mb-2 pl-2">
            Contact our team to discuss customization.
          </li>
          <li className="mb-2 pl-2">Share your specific details.</li>
          <li className="mb-2 pl-2">Collaborate with our experts.</li>
          <li className="mb-2 pl-2">Approve the sample.</li>
          <li className="pl-2">Production and delivery</li>
        </ul>
        <Button>Contact us now</Button>
      </div>
    </div>
  );
}
