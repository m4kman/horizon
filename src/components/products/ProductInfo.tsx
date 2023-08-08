import { useState } from "react";
import ProductIcons from "./ProductIcons";
import { motion } from "framer-motion";

export default function ProductInfo({
  name,
  infoArray,
  img,
}: {
  name: string;
  infoArray: Array<string>;
  img: string[];
}) {
  const [currentIndex, setIndex] = useState(0);
  const [directionTuple, setDirectionTuple] = useState([-1, currentIndex]);

  if (directionTuple[1] !== currentIndex) {
    setDirectionTuple([directionTuple[1], currentIndex]);
  }

  const prev = directionTuple[0];

  const direction = currentIndex > prev ? "increasing" : "decreasing";

  const variants = {
    enter: (direction: string) => ({
      x: direction === "increasing" ? 100 : -100,
    }),
    center: { x: 0 },
  };

  const prevImg = () => {
    const firstImg = currentIndex === 0;
    setIndex((currentIndex) => (firstImg ? img.length - 1 : currentIndex - 1));
  };

  const nextImg = () => {
    const lastImg = currentIndex === img.length - 1;
    setIndex((currentIndex) => (lastImg ? 0 : currentIndex + 1));
  };

  const productPoints = infoArray.map((point) => (
    <li>
      <p className="mt-1 inline-block pl-2 text-2xl leading-10">{point}</p>
    </li>
  ));

  return (
    <div className="mt-28 ">
      <h1 className="text-5xl font-semibold">{name}</h1>
      <div className="flex gap-28">
        <div className="mt-10 max-w-[812px]">
          <ul className="list-inside list-disc leading-10">{productPoints}</ul>
          <div className="mt-20">
            <ProductIcons />
          </div>
          <a
            className="mt-28 block w-full rounded-[.625rem] bg-[#B8D653] px-[4rem] py-[1rem] text-center  text-2xl font-semibold text-[#fff]"
            href="#contact"
          >
            Order Now
          </a>
        </div>
        <div className="relative flex max-h-[752px] max-w-[47rem] rounded-[2rem] bg-[#F3F3F4] shadow-lg">
          <motion.div
            custom={direction}
            key={currentIndex}
            variants={variants}
            initial="enter"
            animate="center"
            transition={{ ease: "easeInOut" }}
            className="h-full w-full self-center"
          >
            <img
              className="h-full w-full rounded-[2rem] bg-[#F3F3F4]"
              src={img[currentIndex]}
              alt={`${name} Image`}
            />
          </motion.div>
          <div className="absolute bottom-0 right-0 flex gap-4 p-6">
            <div
              onClick={prevImg}
              className="cursor-pointer rounded-full bg-[#D9D9D9] p-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </div>
            <div
              onClick={nextImg}
              className="cursor-pointer rounded-full bg-[#D9D9D9] p-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
