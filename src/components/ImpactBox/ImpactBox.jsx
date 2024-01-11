import React from "react";

const ImpactBox = ({bg,num,pera}) => {
  return (
    <div style={{backgroundColor: `${bg}`}} className={` rounded-tl-[40px] rounded-br-[40px] flex flex-col justify-center gap-6 py-16`}>
      <h2 className="text-7xl text-white text-center font-bold">{num}+</h2>
      <p className="text-lg text-white text-center">{pera}</p>
    </div>
  );
};

export default ImpactBox;
