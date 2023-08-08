import { Link } from "react-router-dom";
import imageOne from "../../assets/Image1.webp";
import imageTwo from "../../assets/twill/1.webp";
import imageThree from "../../assets/draw.webp";
import imageFour from "../../assets/image3.webp";

export default function Category() {
  return (
    <div className="mt-[9.5rem] flex flex-col items-center font-main">
      <h1 className="text-[2.5rem] font-semibold">Categories</h1>
      <p className="mt-[1.25rem] text-2xl">
        We specialize in manufacturing the following types of products.
      </p>
      <div className="mt-[6rem] flex items-center justify-center gap-9">
        <Link to="/products/mattress/">
          <div>
            <div className="h-[22.1875rem] max-h-full w-[22.25rem] max-w-full rounded-[1.25rem] bg-[#F3F3F4]">
              <img className="h-full" src={imageOne} alt="Mattress Tape" />
            </div>
            <h1 className="mt-9 text-center text-2xl font-semibold">
              Mattress Tape
            </h1>
          </div>
        </Link>
        <Link to="/products/twill/">
          <div>
            <div className="h-[22.1875rem] max-h-full w-[22.25rem] max-w-full rounded-[1.25rem] bg-[#F3F3F4]">
              <img
                className="h-full rounded-[1.25rem]"
                src={imageTwo}
                alt="Twill Tape"
              />
            </div>
            <h1 className="mt-9 text-center text-2xl font-semibold">
              Twill Tape
            </h1>
          </div>
        </Link>
        <Link to="/products/drawcords/">
          <div>
            <div className="h-[22.1875rem] max-h-full w-[22.25rem] max-w-full rounded-[1.25rem] bg-[#F3F3F4]">
              <img
                className="h-full rounded-[1.25rem]"
                src={imageThree}
                alt="Drawcords"
              />
            </div>
            <h1 className="mt-9 text-center text-2xl font-semibold">
              Drawcords
            </h1>
          </div>
        </Link>
        <Link to="/products/bungee/">
          <div>
            <div className="h-[22.1875rem] max-h-full w-[22.25rem] max-w-full rounded-[1.25rem] bg-[#F3F3F4]">
              <img
                className="h-full rounded-[1.25rem]"
                src={imageFour}
                alt="Bungee Cords"
              />
            </div>
            <h1 className="mt-9 text-center text-2xl font-semibold">
              Bungee Cords
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
}
