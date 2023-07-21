import About from "./about/About";
import Customization from "./about/Customization";
import ChooseUs from "./about/ChooseUs";

export default function Info() {
  return (
    <div className="mt-48 rounded-[3.125rem] bg-[#F3F3F4]">
      <About />
      <ChooseUs />
      <Customization />
    </div>
  );
}
