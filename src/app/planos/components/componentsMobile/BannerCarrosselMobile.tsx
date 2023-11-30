"use client"
import React from 'react';
import AliceCarousel, { EventObject } from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image';


const BannerCarrosselMobile = () => {

    const responsive = {
        0: { items: 1, },
        568: { items: 2 },
        1024: { items: 3 },
    };

    const items = [
        <div className="item" data-value="1" key={0}>
            <div className="flex items-center text-center mt-9">
                <h1 className="text-[#333333]  font-bold text-xl p-6">
                    Tenha um controle melhor das contas a pagar e compras da sua empresa
                </h1>
            </div>
            <div className="flex mt-1 ">
                <p className="text-[#A7A7A7]  font-semibold  text-md text-justify p-6">
                    Otimize a gestão de despesas da sua empresa, previna-se contra multas e atrasos no
                    pagamento aos fornecedores, ganhando tempo e eficiência no processo.
                </p>
            </div>
            <div className='flex mt-5 justify-center gap-2 pb-5 '>
                <Image
                    src={"/IMG-05.jpg"}
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
        </div>,
        <div className="item" data-value="2" key={1}>
            <div className="flex items-center text-center mt-9">
                <h1 className="text-[#333333]  font-bold text-xl p-6">
                    Agilidade e eficiência na entrada de notas
                </h1>
            </div>
            <div className="flex mt-1 ">
                <p className="text-[#A7A7A7]  font-semibold  text-md text-justify p-6">
                    Agilize o processo de entrada e fechamento de notas com o uso do nosso manifestador de notas
                    fiscais de entrada e manutenção de itens, sem a necessidade de redigitar a nota ou
                    os itens para acrescentá-los ao estoque.
                </p>
            </div>
            <div className='flex mt-5 justify-center gap-2 pb-5 '>
                <Image
                    src={"/IMG-06.jpg"}
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
        </div>,
        <div className="item" data-value="2" key={2}>
            <div className="flex items-center text-center mt-9">
                <h1 className="text-[#333333]  font-bold text-xl p-6">
                    Ordem de serviço
                </h1>
            </div>
            <div className="flex mt-1 ">
                <p className="text-[#A7A7A7]  font-semibold  text-md text-justify p-6">
                    Gerencie seus serviços prestados pela empresa com nosso módulo de Ordem de Serviço e gere comprovantes dos mesmos.
                </p>
            </div>
            <div className='flex mt-5 justify-center gap-2 pb-5 '>
                <Image
                    src={"/IMG-07.jpg"}
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
        </div>,
        <div className="item" data-value="2" key={3}>
            <div className="flex items-center text-center mt-9">
                <h1 className="text-[#333333]  font-bold text-xl p-6">
                    Amplie seu empreendimento com uma gestão financeira estruturada
                </h1>
            </div>
            <div className="flex mt-1 ">
                <p className="text-[#A7A7A7]  font-semibold  text-md text-justify p-6">
                    Um sistema centralizado de informações que integra procedimentos burocráticos com análises de saúde do negócio, proporcionando uma previsão mais precisa de lucros e uma tomada de decisão mais transparente. Oferece backups automáticos recorrentes e otimizados, garantindo máxima segurança dos dados.
                </p>
            </div>
            <div className='flex mt-5 justify-center gap-2 pb-5 '>
                <Image
                    src={"/IMG-08.jpg"}
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
        </div>,
        <div className="item" data-value="2" key={4}>
            <div className="flex items-center text-center mt-9">
                <h1 className="text-[#333333]  font-bold text-xl p-6">
                Envie suas Notas Fiscais de Forma Mais Simples e Prática
                </h1>
            </div>
            <div className="flex mt-1 ">
                <p className="text-[#A7A7A7]  font-semibold  text-md text-justify p-6">
                Ao administrar seu empreendimento com o SIAD, você economiza tempo e elimina retrabalhos ao gerar suas notas fiscais diretamente a partir das vendas, eliminando a necessidade de reintroduzir produtos, serviços e informações dos clientes nos portais governamentais.
                </p>
            </div>
            <div className='flex mt-5 justify-center gap-2 pb-5 '>
                <Image
                    src={"/IMG-09.jpg"}
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
                disableButtonsControls
                items={items}
                responsive={responsive}
                onSlideChange={onSlideChange}
                onSlideChanged={onSlideChanged}
            />
        </div>
    );
}

export default BannerCarrosselMobile;
