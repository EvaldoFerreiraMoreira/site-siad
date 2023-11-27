"use client"
import React from 'react';
import AliceCarousel, { EventObject } from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image';


const BannerCarrosselWeb = () => {

    const responsive = {
        0: { items: 1, },
        568: { items: 2 },
        1024: { items: 3 },
    };

    const caract = ">";
    const items = [
        <div className="item" data-value="1" key={0}>
            <div className="flex text-[#A7A7A7] mx-64">
                <div className="flex flex-col justify-center">
                    <div className="flex font-bold text-4xl">
                        <h1 className="text-[#000000]  font-bold text-4xl">
                            Lorem Ipsum is simply dummy text of the printing
                        </h1>
                    </div>
                    <div className="mt-6 w-2/3 text-sm font-semibold text-justify">
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry s standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type.
                        </p>
                    </div>
                </div>
                <div className="flex mt-10 justify-center">
                    <Image
                        src="/PC-01.png"
                        alt="Compiuter"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-auto w-auto max-w-[100%] max-h-[100%]"
                        style={{
                            objectFit: "contain",
                        }}
                    />
                </div>
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
        <div className=''>
            <AliceCarousel
                mouseTracking
                disableButtonsControls
                items={items}
                responsive={responsive}
                onSlideChange={onSlideChange}
                onSlideChanged={onSlideChanged}
            />

        </div>
    );
}

export default BannerCarrosselWeb;
