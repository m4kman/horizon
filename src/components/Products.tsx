import ProductType from "./products/ProductType";
import ProductInfo from "./products/ProductInfo";

export default function Products({
  name,
  infoArray,
  img,
}: {
  name: string;
  infoArray: string[];
  img: string;
}) {
  return (
    <div>
      <div className="mt-[3.75rem] flex gap-16 text-center">
        <ProductType text="Mattress Tape" url="/products/mattress" />
        <ProductType text="Twill Tape" url="/products/twill" />
        <ProductType text="Draw Cords" url="/products/drawcords" />
        <ProductType text="Bungee Cords" url="/products/bungee" />
      </div>
      <ProductInfo name={name} infoArray={infoArray} img={img} />
    </div>
  );
}
