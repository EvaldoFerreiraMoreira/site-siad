"use client"

import { Button } from '@/components/ui/button';
import { CheckSquare } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AliceCarousel, { EventObject } from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const CarrosselFotosWeb = () => {


    const responsive = {
        0: { items: 1, },
        860: { items: 1 },
        1024: { items: 1 },
    };

    const items = [
        <div className=" item justify-center" data-value="0" key={0}>
            <div className='flex mt-6  justify-center gap-6 pb-5 '>

                <Image
                    src={"/FEED-LOJA-DE-CALÇADOS.png"}
                    alt="Imagem"
                    width={0}
                    height={0}
                    sizes="auto"
                    className="h-60 w-auto max-w-[100%] max-h-[100%] rounded-3xl shadow-lg shadow-[#23314C]"
                    style={{
                        objectFit: "contain",


                    }}
                />

                <Image
                    src={"/FEED-LOJA-DE-COSMÉTICOS.png"}
                    alt="Imagem"
                    width={0}
                    height={0}
                    sizes="auto"
                    className="h-60 w-auto max-w-[100%] max-h-[100%] rounded-3xl shadow-lg shadow-[#23314C]"
                    style={{
                        objectFit: "contain",
                    }}
                />
                
                     <Image
                    src={"/FEED-LOJA-DE-FERRAMENTOS.png"}
                    alt="Imagem"
                    width={0}
                    height={0}
                    sizes="auto"
                    className="h-60 w-auto max-w-[100%] max-h-[100%] rounded-3xl shadow-lg shadow-[#23314C]"
                    style={{
                        objectFit: "contain",
                    }}
                />
           


            </div>
        </div>,
        <div className="item" data-value="2" key={1}>
            <div className='flex mt-5 justify-center gap-2 pb-5'>

                <Image
                    src={"/FEED-LOJA-DE-ROUPAS.png"}
                    alt="Imagem"
                    width={0}
                    height={0}
                    sizes="auto"
                    className="h-60 w-auto max-w-[100%] max-h-[100%] rounded-3xl shadow-lg shadow-[#23314C]"
                    style={{
                        objectFit: "fill",
                    }}
                />

                <Image
                    src={"/FEED-MÓVEIS-E-ELETRO.png"}
                    alt="Imagem"
                    width={0}
                    height={0}
                    sizes="auto"
                    className="h-60 w-auto max-w-[100%] max-h-[100%] rounded-3xl shadow-lg shadow-[#23314C]"
                    style={{
                        objectFit: "contain",
                    }}
                />

                 <Image
                    src={"/FEED-ÓTICAS.png"}
                    alt="Imagem"
                    width={0}
                    height={0}
                    sizes="auto"
                    className="h-60 w-auto max-w-[100%] max-h-[100%] rounded-3xl shadow-lg shadow-[#23314C]"
                    style={{
                        objectFit: "contain",
                    }}
                />
            </div>
        </div>,


    ];

    const onSlideChange = (e: EventObject) => {
        console.debug(`onSlideChange => Item's position before a change: ${e.item}. Event:`, e);
    };

    const onSlideChanged = (e: EventObject) => {
        console.debug(`onSlideChanged => Item's position after changes: ${e.item}. Event:`, e);
    };


    return (
        <div className='flex flex-col justify-center  mx-64'>
            <div className='flex text-2xl items-start text-justify my-1 font-bold mt-6 ml-10 gap-2 text-white '>
                <h1>Explorando possibilidades, </h1> <span className='text-black'> elevando resultados </span>
            </div>
            <div className='flex items-start text-justify my-1 font-medium  ml-10 text-white'>
                <p className='text-sm'>Descubra como nossa tecnologia impulsiona o sucesso em múltiplos setores</p>
            </div>
            <div className='ml-6 items-center'>

            <AliceCarousel
                mouseTracking
                keyboardNavigation
                items={items}
                responsive={responsive}
                onSlideChange={onSlideChange}
                onSlideChanged={onSlideChanged}
                
                />
                </div>
        </div>
    );
}

export default CarrosselFotosWeb;