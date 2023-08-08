import logo from "../assets/footer_logo.webp";

export default function Footer() {
  return (
    <footer className="mb-[4.75rem] mt-[10rem] flex justify-between">
      <div className="flex items-end">
        <div>
          <img src={logo} alt="Horizon Logo" />
        </div>
        <p className="ml-10 font-secondary text-2xl">
          Rubber Products Manufacturing LLC
        </p>
      </div>
      <div className="text-xl leading-10">
        <p className="font-medium">
          © copyright Horizon | All rights reserved 2023
        </p>
        <p className="font-semibold text-[#B8D653]">
          info@hgat.ae <span className="text-[#000]">|</span> +971 506280879 /
          +971 67480100 <span className="text-[#000]">|</span> U.A.E
        </p>
      </div>
    </footer>
  );
}
