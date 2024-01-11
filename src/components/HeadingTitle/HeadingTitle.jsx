import React from 'react';

const HeadingTitle = ({text,align}) => {
    return (
        <h1 className={` text-[#000642]  text-2xl md:text-5xl font-bold ${align ? align : "text-center"}`}>{text}</h1>
    );
};

export default HeadingTitle;