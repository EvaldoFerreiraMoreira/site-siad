import React from 'react';
import Image from 'next/image';
import svgImage from '../../../public/animatedfire.svg';

const AnimatedSvg = () => {
    return (
        <>
            <Image src={svgImage} alt="Imagem dos Fogos" />
        </>
    );
};

export default AnimatedSvg;
