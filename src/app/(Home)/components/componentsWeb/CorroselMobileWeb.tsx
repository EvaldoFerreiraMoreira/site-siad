import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import 'react-alice-carousel/lib/alice-carousel.css';
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image';
import React from 'react';
import { Smartphone } from "lucide-react";
import { AnimatePresence, motion, Variants } from "framer-motion";

const test = [
    {
       
        image: "/Iphone-mobile1.png",
    },
    {
        
        image: "/Iphone-mobile2.png",
    },
    {
        
        image: "/Iphone-mobile3.png",
    },
    {
        image: "/Iphone-mobile4.png",
    },
    {
        image: "/Iphone-mobile5.png",
    },
    {
        image: "/Iphone-mobile6.png",
    },
    {
        image: "/Iphone-mobile7.png",
    },
    {
        image: "/Iphone-mobile8.png",
    },
    {
        image: "/Iphone-mobile9.png",
    },
    {
        image: "/Iphone-mobile10.png",
    },

]

const CorroselMobileWeb = () => {
    const cardVariants: Variants = {
        offscreen: {
            y: 300
        },
        onscreen: {
            y: 50,
            rotate: -10,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };
    return (
        <div className='flex justify-center items-center w-full'>
            <div className="flex flex-col ml-10">
                <div className="flex font-bold w-72 text-4xl p-4 ">
                    <h1 className="text-[#3D5685]">Gestor Mobile</h1>
                </div>
                <div className="mt-6 w-2/3 font-semibold text-justify p-4 ">
                    <span className="text-[#3D5685]">Confira a nossa solução mobile com os principais resultados das vendas gerenciais</span>
                </div>
                <div className="flex gap-2 mt-5 w-96 text-[#3D5685] text-sm p-4 ">
                    <ul className="gap-2" >
                        <li className="flex gap-1 ">
                            <Smartphone size={25} />
                            <p> Melhor horário das vendas</p>
                        </li>
                        <li className="flex gap-1 mt-2">
                            <Smartphone size={25} />
                            <p>Mês a mês</p>
                        </li>
                        <li className="flex gap-1 mt-2">
                            <Smartphone size={25} />
                            <p>Ranking de vendas</p>
                        </li>
                        <li className="flex gap-1 mt-2 ">
                            <Smartphone size={25} />
                            <p>Formas de pagamentos e vendedores</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-center w-96'>
                <Carousel className="w-full max-w-[90%]">
                    <CarouselContent>
                        {test.map((item, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex w-full justify-center bg-[#F1F4F9]">
                                            <motion.div className="flex h-96 justify-center"
                                                initial={{ opacity: 0, scale: 0.5 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{
                                                    duration: 0.8,
                                                    delay: 0.5,
                                                    ease: [0, 0.71, 0.2, 1.01]
                                                }}
                                                variants={cardVariants}
                                            >
                                                <AnimatePresence>
                                                    <Image
                                                        src={item?.image}
                                                        alt="SMARTPHONE"
                                                        width={0}
                                                        height={0}
                                                        sizes="100vw"
                                                        className="h-auto w-full max-w-[100%] max-h-[100%]"
                                                        style={{
                                                            objectFit: "contain",
                                                        }}
                                                    />
                                                </AnimatePresence>
                                            </motion.div>
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

export default CorroselMobileWeb;