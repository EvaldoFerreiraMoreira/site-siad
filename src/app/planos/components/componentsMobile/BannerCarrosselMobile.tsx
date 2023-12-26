"use client"
import React from 'react';
import AliceCarousel, { EventObject } from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const BannerCarrosselMobile = () => {

    const test = [
        {
            title: "Tenha um controle melhor das contas a pagar e compras da sua empresa",
            description: "Otimize a gestão de despesas da sua empresa, previna-se contra multas e atrasos no pagamento aos fornecedores, ganhando tempo e eficiência no processo",
            image: "/IMG-05.jpg",
        },
        {
            title: "Agilidade e eficiência na entrada de notas",
            description: "Agilize o processo de entrada e fechamento de notas com o uso do nosso manifestador de notas fiscais de entrada e manutenção de itens, sem a necessidade de redigitar a nota o os itens para acrescentá-los ao estoque.",
            image: "/IMG-06.jpg",
        },
        {
            title: "Ordem de serviço",
            description: "Gerencie seus serviços prestados pela empresa com nosso módulo de Ordem de Serviço e gere comprovantes dos mesmos.",
            image: "/IMG-07.jpg",
        },
        {
            title: "Amplie seu empreendimento com uma gestão financeira estruturada",
            description: "Um sistema centralizado de informações que integra procedimentos burocráticos com análises de saúde do negócio, proporcionando uma previsão mais precisa de lucros e uma tomada de decisão mais transparente. Oferece backups automáticos recorrentes e otimizados, garantindo máxima segurança dos dados.",
            image: "/IMG-08.jpg",
        },
        {
            title: "Envie suas Notas Fiscais de Forma Mais Simples e Prática",
            description: "Ao administrar seu empreendimento com o SIAD, você economiza tempo e elimina retrabalhos ao gerar suas notas fiscais diretamente a partir das vendas, eliminando a necessidade de reintroduzir produtos, serviços e informações dos clientes nos portais governamentais.",
            image: "/IMG-09.jpg",
        },
    ]

    return (
        <div className='flex'>
            {/* <AliceCarousel
                mouseTracking
                disableButtonsControls
                items={items}
                responsive={responsive}
                onSlideChange={onSlideChange}
                onSlideChanged={onSlideChanged}
            /> */}
            <Carousel className="w-full max-w-xs">
                <CarouselContent>
                    {test.map((item, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex items-center h-[10%] justify-center p-4">
                                        <div className='flex flex-col'>
                                            <div className="flex items-center text-center mt-9">
                                                <h1 className="text-[#333333]  font-bold text-md p-6">
                                                    {item?.title}
                                                </h1>
                                            </div>
                                            <div className="flex mt-1 ">
                                                <p className="text-[#A7A7A7] text-sm text-justify p-6">
                                                    {item?.description}
                                                </p>
                                            </div>
                                            <div className='flex mt-5 justify-center gap-2 pb-5 '>
                                                <Image
                                                    src={item?.image}
                                                    alt="Imagem"
                                                    width={0}
                                                    height={0}
                                                    sizes="auto"
                                                    className="h-56 w-auto max-w-[100%] max-h-[100%] rounded-2xl shadow-lg"
                                                    style={{
                                                        objectFit: "contain",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
               
            </Carousel>
        </div>
    );
}

export default BannerCarrosselMobile;
