"use client"

import { Button } from '@/components/ui/button';
import { CheckSquare } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import AliceCarousel, { EventObject } from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const CarrosselInfoWeb = () => {


    const responsive = {
        0: { items: 1, },
        870: { items: 1 },
        1024: { items: 1 },
    };

    const items = [
        <div className="item" data-value="1" key={0}>
            <div className='flex mt-5 justify-center gap-5 pb-5'>

                <div className='flex flex-col items-center justify-center bg-white h-80 w-56 rounded-3xl shadow-[#23314C] shadow-lg '>
                    <div className='flex flex-col gap-5 text-[#303666]'>
                        <h1 className='text-lg font-semibold text-center'>Faturamento</h1>
                        <div className='flex flex-col text-sm gap-3 w-52 text-[#575E69]'>
                            <p className='flex gap-2'><CheckSquare size={16} className='text-[#5576B3]' /> Acompanhe o faturamento por dia</p>
                            <p className='flex gap-2'><CheckSquare size={25} className='text-[#5576B3]' /> Faturamento por grupo de produtos com percentual </p>
                            <p className='flex gap-2'><CheckSquare size={20} className='text-[#5576B3]' /> Faturamento por colaborador mês corrente  </p>
                            <p className='flex gap-2'><CheckSquare size={18} className='text-[#5576B3]' /> Faturamento mês a mês, ano corrente</p>
                            <p className='flex gap-2'><CheckSquare size={25} className='text-[#5576B3]' /> Faturamento por hora identificando o horário de pico</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center bg-white h-80 w-56 rounded-3xl shadow-[#23314C] shadow-lg '>
                    <div className='flex flex-col gap-5 mb-14 text-[#303666]'>
                        <h1 className='text-lg font-semibold text-center mb-5'>Financeiro</h1>
                        <div className='flex flex-col text-sm gap-3 ml-1 w-52 text-[#575E69]'>
                            <p className='flex gap-2'><CheckSquare size={28} className='text-[#5576B3]' /> Acompanhe a receber do dia, total vencidas e não vencidas </p>
                            <p className='flex gap-2'><CheckSquare size={28} className='text-[#5576B3]' /> Acompanhe o total a pagar do dia e total a pagar vencidas</p>
                            <p className='flex gap-2'><CheckSquare size={28} className='text-[#5576B3]' /> Movimento Contábil com total de notas de entradas e saídas </p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center bg-white h-80 w-56 rounded-3xl shadow-[#23314C] shadow-lg '>
                    <div className='flex flex-col gap-5 mb-20 text-[#303666]'>
                        <h1 className='text-lg font-bold text-center'>Auditoria</h1>
                        <div className='flex flex-col text-sm gap-2 ml-2 w-52 text-[#575E69]'>
                            <p className='flex gap-2'><CheckSquare size={25} className='text-[#5576B3]' /> Regístros críticos, como exclusões e cancelamentos </p>
                            <p className='flex gap-2'><CheckSquare size={25} className='text-[#5576B3]' /> Auditoria por origem, como vendas, e contas a receber</p>
                            <p className='flex gap-2'><CheckSquare size={35} className='text-[#5576B3]' /> Filtros por números de documentos por clientes, fornecedores e colaboradores </p>
                        </div>
                    </div>
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
        <div className='flex flex-col h-auto items-center'>
            <div className='flex flex-col text-4xl text-center gap-3 w-1/2 my-8 font-bold text-white'>
                <h1>Temos a estratégia ideal para o seu negócio e para o seu bolso!</h1>
                <p className='text-base mt-2'>Gestão financeira sob medida para a sua empresa a partir de R$129,90</p>
            </div>

            <div className='flex mt-5 justify-center gap-5 pb-5'>

                <div className='flex flex-col items-center justify-center bg-white h-96 w-64 rounded-3xl shadow-[#23314C] shadow-lg '>
                    <div className='flex flex-col gap-5 text-[#303666]'>
                        <h1 className='text-lg font-semibold text-center'>Faturamento</h1>
                        <div className='flex flex-col text-sm gap-3 w-52 text-[#575E69]'>
                            <p className='flex gap-2'><CheckSquare size={16} className='text-[#5576B3]' /> Acompanhe o faturamento por dia</p>
                            <p className='flex gap-2'><CheckSquare size={25} className='text-[#5576B3]' /> Faturamento por grupo de produtos com percentual </p>
                            <p className='flex gap-2'><CheckSquare size={20} className='text-[#5576B3]' /> Faturamento por colaborador mês corrente  </p>
                            <p className='flex gap-2'><CheckSquare size={18} className='text-[#5576B3]' /> Faturamento mês a mês, ano corrente</p>
                            <p className='flex gap-2'><CheckSquare size={25} className='text-[#5576B3]' /> Faturamento por hora identificando o horário de pico</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center bg-white h-96 w-64 rounded-3xl shadow-[#23314C] shadow-lg '>
                    <div className='flex flex-col gap-5 mb-14 text-[#303666]'>
                        <h1 className='text-lg font-semibold text-center mb-5'>Financeiro</h1>
                        <div className='flex flex-col text-sm gap-3 ml-1 w-52 text-[#575E69]'>
                            <p className='flex gap-2'><CheckSquare size={28} className='text-[#5576B3]' /> Acompanhe a receber do dia, total vencidas e não vencidas </p>
                            <p className='flex gap-2'><CheckSquare size={28} className='text-[#5576B3]' /> Acompanhe o total a pagar do dia e total a pagar vencidas</p>
                            <p className='flex gap-2'><CheckSquare size={28} className='text-[#5576B3]' /> Movimento Contábil com total de notas de entradas e saídas </p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center bg-white h-96 w-64 rounded-3xl shadow-[#23314C] shadow-lg '>
                    <div className='flex flex-col gap-5 mb-20 text-[#303666]'>
                        <h1 className='text-lg font-bold text-center'>Auditoria</h1>
                        <div className='flex flex-col text-sm gap-2 ml-2 w-52 text-[#575E69]'>
                            <p className='flex gap-2'><CheckSquare size={25} className='text-[#5576B3]' /> Regístros críticos, como exclusões e cancelamentos </p>
                            <p className='flex gap-2'><CheckSquare size={25} className='text-[#5576B3]' /> Auditoria por origem, como vendas, e contas a receber</p>
                            <p className='flex gap-2'><CheckSquare size={37} className='text-[#5576B3]' /> Filtros por números de documentos por clientes, fornecedores e colaboradores </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center my-10'>
                <Link href='/planos'>
                    <Button className='bg-[#26B547]'>
                        Experimente
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default CarrosselInfoWeb;