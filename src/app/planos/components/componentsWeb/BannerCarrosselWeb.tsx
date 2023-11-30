"use client"
import React from 'react';
import AliceCarousel, { EventObject } from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image';


const BannerCarrosselWeb = () => {

    const responsive = {
        0: { items: 1, },
        568: { items: 1 },
        1024: { items: 1 },
    };
    
    const items = [
        <div className="item" data-value="1" key={0}>
            <div className="flex text-[#A7A7A7] mx-64">
                <div className="flex flex-col justify-center">
                    <div className="flex font-bold text-4xl">
                        <h1 className="text-[#000000]  font-bold text-4xl">
                            Tenha um controle melhor das contas a pagar e compras da sua empresa
                        </h1>
                    </div>
                    <div className="mt-6 w-2/3 text-sm font-semibold text-justify">
                        <p> Otimize a gestão de despesas da sua empresa, previna-se contra multas
                            e atrasos no pagamento aos fornecedores, ganhando tempo e eficiência no processo.
                        </p>
                    </div>
                </div>
                <div className="flex mt-10 justify-center">
                    <Image
                        src="/IMG-05.jpg"
                        alt="Compiuter"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-auto w-auto max-w-[100%] max-h-[100%] rounded-2xl shadow-lg"
                        style={{
                            objectFit: "contain",
                        }}
                    />
                </div>
            </div>
        </div>,
        <div className="item" data-value="1" key={0}>
            <div className="flex text-[#A7A7A7] mx-64">
                <div className="flex flex-col justify-center">
                    <div className="flex font-bold text-4xl">
                        <h1 className="text-[#000000]  font-bold text-4xl">
                            Agilidade e eficiência na entrada de notas
                        </h1>
                    </div>
                    <div className="mt-6 w-2/3 text-sm font-semibold text-justify">
                        <p> 
                            Agilize o processo de entrada e fechamento de notas com o uso do nosso manifestador de notas
                            fiscais de entrada e manutenção de itens, sem a necessidade de redigitar a nota ou
                            os itens para acrescentá-los ao estoque.
                        </p>
                    </div>
                </div>
                <div className="flex mt-10 justify-center">
                    <Image
                        src="/IMG-06.jpg"
                        alt="Compiuter"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-auto w-auto max-w-[100%] max-h-[100%] rounded-2xl shadow-lg"
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
