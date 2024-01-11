import React from 'react';
import HeadingTitle from '../HeadingTitle/HeadingTitle';
import PeraText from '../PeraText/PeraText';

const TitleWIthPera = ({text,pera}) => {
    return (
        <div className='text-center md:max-w-3xl space-y-4 mx-auto'>
            <HeadingTitle text={text}></HeadingTitle>
            <PeraText pera={pera}></PeraText>
        </div>
    );
};

export default TitleWIthPera;