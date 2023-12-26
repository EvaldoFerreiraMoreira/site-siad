"use client"
import React from 'react';
import AliceCarousel, { EventObject } from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image';
import DialogImageWEB from '@/components/ui/componentsWeb/DialogImageWeb';


const BannerCarrosselWeb = () => {

    const responsive = {
        0: { items: 1, },
        568: { items: 1 },
        1024: { items: 1 },
    };

    const items = [
        <div className="item " data-value="1" key={0}>
            <div className="flex text-[#A7A7A7] mx-64">
                <div className="flex flex-col justify-center w-[50%]">
                    <div className="flex font-bold text-3xl">
                        <h1 className="text-[#000000]  font-bold ">
                            Tenha um controle melhor das contas a pagar e compras da sua empresa
                        </h1>
                    </div>
                    <div className="mt-6 w-2/3 text-sm text-justify">
                        <p> Otimize a gestão de despesas da sua empresa, previna-se contra multas
                            e atrasos no pagamento aos fornecedores, ganhando tempo e eficiência no processo.
                        </p>
                    </div>
                </div>
                <div className="flex mt-10 justify-center w-[50%]">
                    <DialogImageWEB imagem={"IMG-05.jpg"}/>
                </div>
            </div>
        </div>,
        <div className="item" data-value="1" key={1}>
            <div className="flex text-[#A7A7A7] mx-64">
                <div className="flex flex-col justify-center w-[50%]">
                    <div className="flex font-bold text-4xl">
                        <h1 className="text-[#000000]  font-bold text-4xl">
                            Agilidade e eficiência na entrada de notas
                        </h1>
                    </div>
                    <div className="mt-6 w-2/3 text-sm text-justify">
                        <p>
                            Agilize o processo de entrada e fechamento de notas com o uso do nosso manifestador de notas
                            fiscais de entrada e manutenção de itens, sem a necessidade de redigitar a nota ou
                            os itens para acrescentá-los ao estoque.
                        </p>
                    </div>
                </div>
                <div className="flex mt-10 justify-center w-[50%]">
                <DialogImageWEB imagem={"IMG-06.jpg"}/>
                   
                </div>
            </div>
        </div>,
        <div className="item justify-center" data-value="1" key={2}>
            <div className="flex text-[#A7A7A7] mx-64">
                <div className="flex flex-col justify-center w-[50%]">
                    <div className="flex font-bold text-4xl">
                        <h1 className="text-[#000000]  font-bold text-4xl">
                            Ordem de serviço
                        </h1>
                    </div>
                    <div className="mt-6 w-2/3 text-sm text-justify">
                        <p>
                            Gerencie seus serviços prestados pela empresa com nosso módulo de Ordem de Serviço e gere comprovantes dos mesmos.
                        </p>
                    </div>
                </div>
                <div className="flex mt-10 justify-center w-[50%]">
                <DialogImageWEB imagem={"IMG-07.jpg"}/>
                   
                </div>
            </div>
        </div>,
        <div className="item" data-value="1" key={3}>
            <div className="flex text-[#A7A7A7] mx-64">
                <div className="flex flex-col justify-center w-[50%]">
                    <div className="flex font-bold text-4xl">
                        <h1 className="text-[#000000]  font-bold text-4xl">
                            Amplie seu empreendimento com uma gestão financeira estruturada
                        </h1>
                    </div>
                    <div className="mt-6 w-2/3 text-sm text-justify">
                        <p>
                            Um sistema centralizado de informações que integra procedimentos burocráticos com análises de saúde do negócio, proporcionando uma previsão mais precisa de lucros e uma tomada de decisão mais transparente. Oferece backups automáticos recorrentes e otimizados, garantindo máxima segurança dos dados.
                        </p>
                    </div>
                </div>
                <div className="flex mt-10 justify-center w-[50%]">
                <DialogImageWEB imagem={"IMG-08.jpg"}/>
    
                </div>
            </div>
        </div>,
        <div className="item" data-value="1" key={4}>
            <div className="flex text-[#A7A7A7] mx-64">
                <div className="flex flex-col justify-center w-[50%]">
                    <div className="flex font-bold text-4xl">
                        <h1 className="text-[#000000]  font-bold text-4xl">
                            Envie suas Notas Fiscais de Forma Mais Simples e Prática
                        </h1>
                    </div>
                    <div className="mt-6 w-2/3 text-sm text-justify">
                        <p>
                            Ao administrar seu empreendimento com o SIAD, você economiza tempo e elimina retrabalhos ao gerar suas notas fiscais diretamente a partir das vendas, eliminando a necessidade de reintroduzir produtos, serviços e informações dos clientes nos portais governamentais.
                        </p>
                    </div>
                </div>
                <div className="flex mt-10 justify-center w-[50%]">
                <DialogImageWEB imagem={"IMG-09.jpg"}/>
                 
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
        <div className='flex items-center justify-center w-[100%]  '>
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
