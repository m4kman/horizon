import React from "react";
import heroImg from "../../assets/hero.png";

export default function Hero() {
  return (
    <div className="grid h-[58rem] grid-cols-12 grid-rows-3 gap-x-[10.65rem] gap-y-16 bg-hero-image bg-cover">
      <div className="col-start-6 row-start-2 w-[39rem]">
        <p className="self-center font-secondary text-2xl font-normal">
          Rubber Products Manufacturing LLC
        </p>
        <h1 className="inline-block max-w-[40rem] self-center font-hero text-[4rem] font-bold leading-[5rem]">
          Quality Rubber Strips, Unmatched Performance
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="33"
            viewBox="0 0 100 33"
            fill="none"
            className="mx-4 inline-block"
          >
            <path
              d="M33.0024 16.4998L8.25244 30.7892L8.25244 2.21034L33.0024 16.4998Z"
              fill="#70629B"
            />
            <path
              d="M66.0024 16.4998L41.2524 30.7892L41.2524 2.21034L66.0024 16.4998Z"
              fill="#DBD0FA"
            />
            <path
              d="M99.0024 16.4998L74.2524 30.7892L74.2524 2.21034L99.0024 16.4998Z"
              fill="#DBD0FA"
            />
          </svg>
        </h1>
      </div>
    </div>
  );
}