import React from "react";

const PrimaryButton = ({ text }) => {
  return (
    <button className="bg-[#FF7A1F] px-5 md:px-9 py-3 md:py-4 rounded-lg shadow-md md:text-xl font-medium shadow-[#FF7A1F]">
    {text}
    </button>
  );
};

export default PrimaryButton;
