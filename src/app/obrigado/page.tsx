import React from 'react';
import AnimatedSvg from '../obrigado/AnimatedSvg';

export default function Obrigado() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Obrigado Pela Compra</h2>
                <p className="text-lg mb-8">Seu pedido foi recebido com sucesso! 🎉</p>
                <div className="flex items-center justify-center mb-10">
                    <AnimatedSvg />
                </div>
                <p className="text-sm text-gray-500">Entraremos em contato com você, para configurar o programa.</p>
            </div>
        </div>
    );
}
