"use client"

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import React, { useState } from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import FormularioWeb from '@/components/ui/componentsWeb/FormularioWeb';

const CarrosselPlanosWeb = () => {
    const [activeSection, setActiveSection] = useState("mensal");

    return (
        <div className='flex flex-col'>

            <div className='flex justify-center'>
                <div className='flex bg-[#3D5685] w-36 h-11 items-center justify-center rounded-3xl'>
                    <div className='flex justify-center gap-1'>
                        <Button variant={'secondary'} size={'sm'} className={
                            activeSection === "mensal"
                                ? "flex rounded-3xl justify-center items-center"
                                : "flex rounded-3xl justify-center items-center bg-[#3D5685] text-white"
                        } onClick={() => setActiveSection("mensal")}>
                            Mensal
                        </Button>

                        <Button variant={'secondary'} size={'sm'} className={
                            activeSection === "anual"
                                ? "flex rounded-3xl justify-center items-center"
                                : "flex rounded-3xl justify-center items-center bg-[#3D5685] text-white"
                        } onClick={() => setActiveSection("anual")}>
                            Anual
                        </Button>
                    </div>
                </div>
            </div>

            <div className='text-white'>
                <div className='flex mt-5 justify-center gap-5 pb-5'>

                    <div className='flex flex-col justify-center  bg-white w-72 p-4 rounded-3xl shadow-[#23314C] shadow-lg'>
                        <div className='flex flex-col items-center gap-5 text-[#303666]'>
                            <h1 className='text-2xl font-bold'>Grátis</h1>
                            <div className='flex flex-col text-center  gap-2 text-[#575E69]'>
                                <p className='w-30'>Realize um teste gratuitamente por um periodo de 7 dias</p>

                            </div>
                            <div className='flex flex-col gap-3'>
                                <h1 className='text-2xl font-bold text-black '>Teste Grátis</h1>
                                <p className='text-xl text-center font-semibold text-red-600'>
                                    7 Dias
                                </p>
                            </div>
                            {/* <Separator className='bg-black' /> */}
                            <div className='flex flex-col text-base gap-1'>
                                <p>

                                </p>
                                <p>

                                </p>
                                <p>

                                </p>
                                <p>

                                </p>
                                <p>

                                </p>
                                <p>

                                </p>
                                <p>

                                </p>
                                <p>

                                </p>
                                <p>

                                </p>
                                <p>

                                </p>

                            </div>
                            <FormularioWeb />
                        </div>
                    </div>
                    <div className='flex flex-col justify-center  bg-white w-72 p-4 rounded-3xl shadow-[#23314C] shadow-lg'>
                        <div className='flex flex-col items-center gap-5 text-[#303666]'>
                            <h1 className='text-2xl font-bold'>Básico</h1>
                            <div className='flex flex-col text-center  gap-2 text-[#575E69]'>
                                <p className='w-30'>Plano Básico </p>
                                <p>Ideal para MEI</p>
                            </div>
                            <div className='flex flex-col justify-center mr-9'>
                                <p className='text-xl left-10 text-red-600 line-through'>
                                    {activeSection === "mensal"
                                        ? ""
                                        : "R$ 149,90"
                                    }
                                </p>
                                <h1 className='flex gap-1 items-center text-3xl font-bold text-black'>
                                    {activeSection === "mensal"
                                        ? "R$ 149,90"
                                        : "R$ 129,90"
                                    }
                                    <p className='text-xs mt-3 font-light text-gray-500'>/mês</p>
                                </h1>
                            </div>
                            <Separator className='bg-black' />
                            <div className='flex flex-col text-base gap-1'>
                                <p>
                                    - Cadastro de Cliente
                                </p>
                                <p>
                                    - Cadastro de Produtos
                                </p>
                                <p>
                                    - Cadastro de Fornecedor
                                </p>
                                <p>
                                    - Cadastro de Grupo
                                </p>
                                <p>
                                    - Cadastro de Sub grupo
                                </p>
                                <p>
                                    - Venda Gerencial
                                </p>
                                <p>
                                    - Ordem de Serviço
                                </p>
                                <p>
                                    - Controle de Estoque
                                </p>
                                <p>
                                    - Relatórios Gerenciais
                                </p>
                                <p>
                                    - Gestor Mobile
                                </p>

                            </div>
                            {activeSection === "mensal"
                                ?
                                <Link href="https://buy.stripe.com/8wM8zs9pq1wk0FyeUU">
                                    <Button className='bg-[#26B547] rounded-3xl px-14'>
                                        Obter
                                    </Button>
                                </Link>
                                : <Link href="https://buy.stripe.com/cN22b48lm5MAdskdQR">
                                    <Button className='bg-[#26B547] rounded-3xl px-14'>
                                        Obter
                                    </Button>
                                </Link>
                            }
                        </div>
                    </div>
                    <div className='flex flex-col bg-white  w-72 rounded-3xl shadow-[#23314C] shadow-lg'>
                        <div className='flex bg-[#5576B3] w-40 h-7 mb-1 justify-center items-center mx-16 rounded-b-2xl'>
                            <h1 className='text-center text-sm'>Mais Vendido</h1>
                        </div>
                        <div className='flex flex-col items-center gap-5 text-[#303666]'>
                            <h1 className='text-2xl font-bold'>Intermediário</h1>
                            <div className='flex flex-col text-center  gap-2 text-[#575E69]'>
                                <p className='w-34'>Plano Intermediário
                                </p>
                                <p>
                                    Ideal para Micro Empresa</p>
                            </div>
                            <div className='flex flex-col justify-center mr-9'>
                                <p className='text-xl left-10 text-red-600 line-through'>
                                    {activeSection === "mensal"
                                        ? ""
                                        : "R$ 284,20"
                                    }
                                </p>
                                <h1 className='flex gap-1 items-center text-3xl font-bold text-black'>
                                    {activeSection === "mensal"
                                        ? "R$ 284,20"
                                        : "R$ 253,20"
                                    }
                                    <p className='text-xs mt-3 font-light text-gray-500'>/mês</p>
                                </h1>
                            </div>
                            <Separator className='bg-black w-64' />
                            <div className='flex flex-col text-base gap-1'>
                                <p>
                                    - Cadastro de Cliente
                                </p>
                                <p>
                                    - Cadastro de Produtos
                                </p>
                                <p>
                                    - Cadastro de Fornecedor
                                </p>
                                <p>
                                    - Cadastro de Grupo
                                </p>
                                <p>
                                    - Cadastro de Sub grupo
                                </p>
                                <p>
                                    - Ordem de Serviço
                                </p>
                                <p>
                                    - Emissor de NFE
                                </p>
                                <p>
                                    - Emissor de NFC-e
                                </p>
                                <p>
                                    - Relatórios Contábeis
                                </p>
                                <p>
                                    - Gestor Mobile
                                </p>
                            </div>
                            {activeSection === "mensal"
                                ?
                                <Link href="https://buy.stripe.com/8wM02W8lm6QE0Fy7sy">
                                    <Button className='bg-[#26B547] rounded-3xl px-14 mb-5'>
                                        Obter
                                    </Button>
                                </Link>
                                : <Link href="https://buy.stripe.com/bIY9Dw0SU4Iw9c46ov">
                                    <Button className='bg-[#26B547] rounded-3xl px-14 mb-5'>
                                        Obter
                                    </Button>
                                </Link>
                            }
                        </div>
                    </div>
                    <div className='flex flex-col bg-white w-72 rounded-3xl shadow-[#23314C] shadow-lg'>
                        <div className='flex bg-[#242858] w-44 h-7 mb-1 justify-center items-center mx-14 rounded-b-2xl'>
                            <h1 className='text-center text-sm'>Mais Recomendado</h1>
                        </div>
                        <div className='flex flex-col items-center gap-5 text-[#303666]'>
                            <h1 className='text-2xl font-bold'>Avançado PRO</h1>
                            <div className='flex flex-col text-center gap-2 text-[#575E69]'>
                                <p className='w-34'>Plano Avançado PRO
                                </p>
                                <p>Ideal para Médio Porte</p>
                            </div>
                            <div className='flex flex-col justify-center mr-9'>
                                <p className='text-xl left-10 text-red-600 line-through'>
                                    {activeSection === "mensal"
                                        ? ""
                                        : "R$ 426,30"
                                    }
                                </p>
                                <h1 className='flex gap-1 items-center text-3xl font-bold text-black'>
                                    {activeSection === "mensal"
                                        ? "R$ 426,30"
                                        : "R$ 386,30"
                                    }
                                    <p className='text-xs mt-3 font-light text-gray-500'>/mês</p>
                                </h1>
                            </div>
                            <Separator className='bg-black w-64' />
                            <div className='flex flex-col text-base gap-1'>
                                <p>
                                    - Tudo do plano Básico
                                </p>
                                <p>
                                    - Tudo do plano Intermediário
                                </p>
                                <p>
                                    - Controle de Comissão
                                </p>
                                <p>
                                    - Venda Externa
                                </p>
                                <p>
                                    - Recebimento Pix
                                </p>
                                <p>
                                    - Integração Pix com Seu Banco
                                </p>
                                <p>
                                    - Relatório DRE
                                </p>
                                <p>
                                    - Plano de Conta
                                </p>
                                <p>
                                    - Fluxo de Caixa
                                </p>
                                <p>
                                    - Integração com Ecommerce
                                </p>

                            </div>
                            {activeSection === "mensal"
                                ?
                                <Link href="https://buy.stripe.com/00gcPI7hi8YMag8eV2">
                                    <Button className='bg-[#26B547] rounded-3xl px-14 mb-5'>
                                        Obter
                                    </Button>
                                </Link>
                                : <Link href="https://buy.stripe.com/8wMaHAcBC7UI2NG28h">
                                    <Button className='bg-[#26B547] rounded-3xl px-14 mb-5'>
                                        Obter
                                    </Button>
                                </Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarrosselPlanosWeb;