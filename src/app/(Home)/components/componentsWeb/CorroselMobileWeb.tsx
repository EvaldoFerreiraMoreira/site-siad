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
        title: "Gestor Mobile",
        description: "Confira a nossa solução mobile com os principais resultados das vendas gerenciais",
        image: "/Iphone-mobile.png",
    },
    {
        title: "Gestor Mobile",
        description: "Confira a nossa solução mobile com os principais resultados das vendas gerenciais",
        image: "/Iphone-mobile.png",
    },
    {
        title: "Gestor Mobile",
        description: "Confira a nossa solução mobile com os principais resultados das vendas gerenciais",
        image: "/Iphone-mobile.png",
    },
    {
        title: "Gestor Mobile",
        description: "Confira a nossa solução mobile com os principais resultados das vendas gerenciais",
        image: "/Iphone-mobile.png",
    },
    {
        title: "Gestor Mobile",
        description: "Confira a nossa solução mobile com os principais resultados das vendas gerenciais",
        image: "/Iphone-mobile.png",
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
        <div className='flex justify-center bg-transparent  w-full'>
            <Carousel className=" flex w-1/2 max-w-[90%] justify-center ml-48">
                <CarouselContent>
                    {test.map((item, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1 bg-transparent flex w-ful ">
                                <Card>
                                    <CardContent className="flex flex-col justify-center w-full border-black border">
                                        <div className="flex w-72 font-bold text-4xl p-4">
                                            <h1 className="text-[#3D5685]">{item?.title}</h1>
                                        </div>
                                        <div className="mt-6 w-2/3 font-semibold text-justify p-4">
                                            <span className="text-[#3D5685]">{item?.description}</span>
                                        </div>
                                        <div className="flex flex-col gap-2 mt-5 text-[#3D5685] text-sm p-4" >
                                            <ul className="w-full justify-start gap-2" >
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
                                                <li className="flex gap-1 mt-2" >
                                                    <Smartphone size={25} />
                                                    <p>Formas de pagamentos e vendedores</p>
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
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
                                                        className="h-auto w-auto max-w-[100%] max-h-[100%] ml-40"
                                                        style={{
                                                            objectFit: "contain",
                                                        }}
                                                    />
                                                </AnimatePresence>
                                            </motion.div>
                                        </div>
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
    );
}

export default CorroselMobileWeb;