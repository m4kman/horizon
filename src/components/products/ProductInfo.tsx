import ProductIcons from "./ProductIcons";

export default function ProductInfo({
  name,
  infoArray,
  img,
}: {
  name: string;
  infoArray: Array<string>;
  img: string;
}) {
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
        <div className="max-h-full max-w-[47rem] self-center rounded-[2rem] bg-[#F3F3F4]">
          <img className="rounded-[2rem]" src={img} alt={`${name} Image`} />
        </div>
      </div>
    </div>
  );
}
