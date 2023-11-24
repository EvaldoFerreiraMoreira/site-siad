"use client"
import React from 'react';
import AliceCarousel, { EventObject } from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image';


const BannerCarrossel = () => {

    const responsive = {
        0: { items: 1, },
        568: { items: 2 },
        1024: { items: 3 },
    };

    const caract = ">";
    const items = [
        <div className="item" data-value="1" key={0}>
            <div className="flex items-center text-center mt-9">
                <h1 className="text-[#333333]  font-bold text-xl p-6">
                    Lorem Ipsum is simply dummy text of the printing
                </h1>
            </div>
            <div className="flex mt-1 ">
                <p className="text-[#A7A7A7]  font-semibold  text-md text-justify p-6">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type.
                </p>
            </div>
            <div className='flex mt-5 justify-center gap-2 pb-5 '>
                <Image
                    src={"/PC-01.png"}
                    alt="Imagem"
                    width={0}
                    height={0}
                    sizes="auto"
                    className="h-56 w-auto max-w-[100%] max-h-[100%]"
                    style={{
                        objectFit: "contain",
                    }}
                />
            </div>
            <div className="flex mt-1 justify-center">
                <p className="text-[#3D5685]  font-bold text-sm text-center hover:text-[#333333] ">
                    Lorem Ipsum is simply dummy text of
                </p>
            </div>
        </div>,
        <div className="item" data-value="2" key={1}>
            <div className="flex items-center text-center mt-9">
                <h1 className="text-[#333333]  font-bold text-xl p-6">
                    Lorem Ipsum is simply dummy text of the printing
                </h1>
            </div>
            <div className="flex mt-1 ">
                <p className="text-[#A7A7A7]  font-semibold  text-md text-justify p-6">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type.
                </p>
            </div>
            <div className='flex mt-5 justify-center gap-2 pb-5 '>
                <Image
                    src={"/PC-01.png"}
                    alt="Imagem"
                    width={0}
                    height={0}
                    sizes="auto"
                    className="h-56 w-auto max-w-[100%] max-h-[100%]"
                    style={{
                        objectFit: "contain",
                    }}
                />
            </div>
            <div className="flex mt-1 justify-center">
                <p className="text-[#3D5685]  font-bold text-sm text-center hover:text-[#333333] ">
                    Lorem Ipsum is simply dummy text of
                </p>
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
        <div className='flex'>
            <AliceCarousel
                mouseTracking
                keyboardNavigation
                items={items}
                responsive={responsive}
                onSlideChange={onSlideChange}
                onSlideChanged={onSlideChanged}
            />
        </div>
    );
}

export default BannerCarrossel;
