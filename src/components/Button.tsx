import React from "react";

export default function Button(props) {
  return (
    <button className="rounded-[.625rem] bg-[#B8D653] px-[4rem] py-[1rem] font-main text-2xl font-semibold text-[#fff]">
      {props.children}
    </button>
  );
}
