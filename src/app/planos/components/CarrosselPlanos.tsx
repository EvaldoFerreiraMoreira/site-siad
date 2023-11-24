"use client"

import { Button } from '@/components/ui/button';
import { CheckSquare } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import AliceCarousel, { EventObject } from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const CarrosselPlanos = () => {

    const responsive = {
        0: { items: 1, },
        568: { items: 2 },
        1024: { items: 3 },
    };

    const items = [
        <div className="item" data-value="1" key={0}>
            <div className='flex mt-5 justify-center gap-5 pb-5'>
                <div className='flex flex-col justify-center bg-white h-64 w-40 rounded-3xl shadow-[#23314C] shadow-lg'>
                    <div className='flex flex-col items-center gap-5 text-[#303666]'>
                        <h1 className='text-lg font-bold'>Lorem Ipsum</h1>
                        <div className='flex flex-col text-sm gap-2 text-[#575E69]'>
                            <p className='w-28'>Lorem Ipsum simplydummy text of the printing</p>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='text-lg font-bold text-black'>Teste Grátis</h1>
                        </div>
                        <Button className='bg-[#26B547] rounded-3xl'>
                            Obter
                        </Button>
                    </div>
                </div>
                <div className='flex flex-col justify-center bg-white h-64 w-40 rounded-3xl shadow-[#23314C] shadow-lg'>
                    <div className='flex flex-col items-center gap-5 text-[#303666]'>
                        <h1 className='text-lg font-bold'>Lorem Ipsum</h1>
                        <div className='flex flex-col text-sm gap-2 text-[#575E69]'>
                            <p className='w-28'>Lorem Ipsum simplydummy text of the printing</p>
                        </div>
                        <div className='flex flex-col mr-9'>
                            <p className='text-xs left-10 text-red-600 line-through'>R$119,90</p>
                            <h1 className='text-lg font-bold text-black'>R$89,90</h1>
                        </div>
                        <Button className='bg-[#26B547] rounded-3xl'>
                            Obter
                        </Button>
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
        <div className='flex flex-col' id="carrosselPlanos">

            <div className='text-white'>
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

export default CarrosselPlanos;