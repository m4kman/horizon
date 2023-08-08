import ChooseUsImages from "./ChooseUsImages";
import groupOne from "../../../assets/Group1.webp";
import groupTwo from "../../../assets/Group2.webp";
import groupThree from "../../../assets/Group3.webp";
import groupFour from "../../../assets/Group4.webp";
import groupFive from "../../../assets/Group5.webp";

export default function ChooseUs() {
  return (
    <div className="mb-[12.25rem] mt-[9.25rem] text-center">
      <p className="text-xl font-bold leading-8 text-[#8878B7]">
        why choose us?
      </p>
      <h1 className="mb-[6.25rem] text-[2.5rem] font-semibold">
        Your Needs, Our Priority
      </h1>
      <div className="flex w-full flex-wrap justify-center gap-[4rem] px-[7.06rem] text-center">
        <div className="">
          <ChooseUsImages path={groupOne} />
          <p className="mx-auto mt-[3.25rem] max-w-[11rem] text-2xl font-medium">
            Superior Quality
          </p>
        </div>
        <div className="">
          <ChooseUsImages path={groupTwo} />
          <p className="mx-auto mt-[3.25rem] max-w-[16rem] text-2xl font-medium">
            Extensive Product Range
          </p>
        </div>
        <div className="">
          <ChooseUsImages path={groupThree} />
          <p className="mx-auto mt-[3.25rem] max-w-[12.9rem] text-2xl font-medium">
            Competitive Pricing
          </p>
        </div>
        <div className="">
          <ChooseUsImages path={groupFour} />
          <p className="mx-auto mt-[3.25rem] max-w-[15.43rem] text-2xl font-medium">
            Reliable Customer Service
          </p>
        </div>
        <div className="">
          <ChooseUsImages path={groupFive} />
          <p className="mx-auto mt-[3.25rem] max-w-[14.18rem] text-2xl font-medium">
            Sustainable Practices
          </p>
        </div>
      </div>
    </div>
  );
}
