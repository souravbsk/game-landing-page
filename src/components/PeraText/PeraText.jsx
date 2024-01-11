import React from "react";
import {Montserrat} from "next/font/google"

const montserrat = Montserrat({subsets: ['latin'], weight: ['300', '400', '700'],})
const PeraText = ({pera}) => {
  return (
    <p style={montserrat.style} className="md:text-lg font-medium text-[#000642]">
      {pera}
    </p>
  );
};

export default PeraText;
