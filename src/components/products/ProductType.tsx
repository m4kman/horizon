import { NavLink } from "react-router-dom";

export default function ProductType({
  text,
  url,
}: {
  text: string;
  url: string;
}) {
  return (
    <NavLink
      to={url}
      className={({ isActive }) =>
        isActive
          ? `grow rounded-[1.25rem] bg-[#B8D653] px-[2.875rem] py-[2.675rem] font-main text-2xl font-semibold text-[#fff]`
          : `grow rounded-[1.25rem] bg-[#F3F3F4] px-[2.875rem] py-[2.675rem] font-main text-2xl font-semibold`
      }
    >
      {text}
    </NavLink>
  );
}
