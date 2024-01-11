import Image from "next/image";
import React from "react";

const UpComingGameCard = ({img,title,pera}) => {
  return (
    <div>
      <div className="card lg:card-side h-96 md:h-72 border">
        <figure className="flex-1">
         <Image className=" h-full  w-full object-fill" src={img} alt="img"></Image>
        </figure>
        <div className="card-body p-5 flex-1">
          <h2 className="card-title">{title}</h2>
          <p>{pera}</p>
         
        </div>
      </div>
    </div>
  )
};

export default UpComingGameCard;
