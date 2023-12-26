"use client"
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image';
import 'react-alice-carousel/lib/alice-carousel.css';


const CarrosselFotosWeb = () => {


    const responsive = {
        0: { items: 1, },
        860: { items: 1 },
        1024: { items: 1 },
    };

    const test = [
        {
            image: "/FEED-LOJA-DE-CALÇADOS.png",
        },
        {
            image: "/FEED-LOJA-DE-COSMÉTICOS.png",
        },
        {
            image: "/FEED-LOJA-DE-FERRAMENTOS.png",
        },
        {
            image: "/FEED-LOJA-DE-ROUPAS.png",
        },
        {
            image: "/FEED-MÓVEIS-E-ELETRO.png",
        },
        {
            image: "/FEED-ÓTICAS.png",
        }
    ]

    return (
        <div className='flex flex-col justify-center mx-64'>
            <div className='flex flex-col items-center p-5'>
                <div className='flex text-2xl text-justify my-1 font-bold mt-6 ml-10 gap-2 text-white '>
                    <h1>Explorando possibilidades, </h1> <span className='text-black'> elevando resultados </span>
                </div>
                <div className='flex items-start text-justify my-1 font-medium  ml-10 text-white'>
                    <p className='text-sm'>Descubra como nossa tecnologia impulsiona o sucesso em múltiplos setores</p>
                </div>
            </div>
            <div className='ml-6 items-center'>
                <Carousel className="w-full pb-10 ">
                    <CarouselContent className="-ml-1">
                        {test.map((item, index) => (
                            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3 ">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6 bg-[#3D5685] ">
                                            <Image
                                                src={item?.image}
                                                alt="Imagem"
                                                width={0}
                                                height={0}
                                                sizes="auto"
                                                className="h-auto w-auto max-w-[100%] max-h-[100%] rounded-3xl shadow-lg shadow-[#23314C]"
                                                style={{
                                                    objectFit: "contain",
                                                }}
                                            />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    );
}

export default CarrosselFotosWeb;