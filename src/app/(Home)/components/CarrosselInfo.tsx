"use client"

import { Button } from '@/components/ui/button';
import { CheckSquare } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import AliceCarousel, { EventObject } from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const CarrosselInfo = () => {


    const responsive = {
        0: { items: 1, },
        568: { items: 2 },
        1024: { items: 3 },
    };

    const items = [
        <div className="item" data-value="1" key={0}>
            <div className='flex mt-5 justify-center gap-5'>

                <div className='flex flex-col items-center justify-center bg-white h-56 w-40 rounded-3xl'>
                    <div className='flex flex-col gap-5 text-[#303666]'>
                        <h1 className='text-lg font-semibold'>Lorem Ipsum</h1>
                        <div className='flex flex-col text-sm gap-2 text-[#575E69]'>
                            <p className='flex gap-2'><CheckSquare size={15} className='text-[#5576B3]' /> Lorem Ipsum </p>
                            <p className='flex gap-2'><CheckSquare size={15} className='text-[#5576B3]' /> simplydummy </p>
                            <p className='flex gap-2'><CheckSquare size={15} className='text-[#5576B3]' /> text of the </p>
                            <p className='flex gap-2'><CheckSquare size={15} className='text-[#5576B3]' /> printing</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center bg-white h-56 w-40 rounded-3xl'>
                    <div className='flex flex-col gap-5 text-[#303666]'>
                        <h1 className='text-lg font-semibold'>Lorem Ipsum</h1>
                        <div className='flex flex-col text-sm gap-2 text-[#575E69]'>
                            <p className='flex gap-2'><CheckSquare size={15} className='text-[#5576B3]' /> Lorem Ipsum </p>
                            <p className='flex gap-2'><CheckSquare size={15} className='text-[#5576B3]' /> simplydummy</p>
                            <p className='flex gap-2'><CheckSquare size={15} className='text-[#5576B3]' /> text of the </p>
                            <p className='flex gap-2'><CheckSquare size={15} className='text-[#5576B3]' /> printing</p>
                            <p className='flex gap-2'><CheckSquare size={15} className='text-[#5576B3]' /> text of the </p>
                            <p className='flex gap-2'><CheckSquare size={15} className='text-[#5576B3]' /> Lorem Ipsum </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        <div className="item" data-value="2" key={1}>
            <div className='flex mt-5 justify-center gap-5'>

                <div className='bg-white h-56 w-40 rounded-3xl'></div>
                <div className='bg-white h-56 w-40 rounded-3xl'></div>
            </div>
        </div>,
        <div className="item" data-value="3" key={2} >
            <div className='flex mt-5 justify-center gap-5'>

                <div className='bg-white h-56 w-40 rounded-3xl'></div>
                <div className='bg-white h-56 w-40 rounded-3xl'></div>
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
        <div className='flex flex-col h-auto'>
            <div className='flex flex-col text-xl items-center text-justify my-6 font-bold text-white'>
                <h1>Lorem Ipsum</h1>
                <p className='text-sm'>Lorem Ipsum is simplydummy text of the printing</p>
            </div>
            <AliceCarousel
                mouseTracking
                keyboardNavigation
                items={items}
                responsive={responsive}
                onSlideChange={onSlideChange}
                onSlideChanged={onSlideChanged}
            />
            <div className='flex justify-center mb-10'>
                <Link href='/planos'>
                <Button className='bg-[#26B547]'>
                    Experimente
                </Button>
                </Link>
            </div>
        </div>
    );
}

export default CarrosselInfo;