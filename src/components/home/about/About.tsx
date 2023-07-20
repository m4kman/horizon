import aboutOne from "../../../assets/about1.webp";

export default function About() {
  return (
    <div id="about" className="flex justify-between gap-[8.25rem]">
      <div className="ml-28 mt-44">
        <p className="text-xl font-bold leading-8 text-[#8878B7]">
          who we are?
        </p>
        <h1 className="mb-6 text-[2.5rem] font-semibold">About us</h1>
        <p className="text-2xl">
          We have built a reputation for excellence and reliability in providing
          high-quality rubber strips, tapes, cords, and related products. With
          years of experience and a dedicated team of experts, we are committed
          to meeting the unique requirements of our valued customers.
        </p>
      </div>
      <div>
        <img
          className="relative bottom-20"
          src={aboutOne}
          alt="Graphic Image"
        />
      </div>
    </div>
  );
}
