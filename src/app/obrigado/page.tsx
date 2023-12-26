import React from 'react';
import AnimatedSvg from '../obrigado/AnimatedSvg';
import Script from 'next/script';

export default function Obrigado() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-11426343244" />
            <Script id="google-analytics">
                {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
 
          gtag('config', 'AW-11426343244');
        `}
            </Script>
            {/* Google Analytics */}
            <Script id="google-analytics-event">
                {`
                    gtag('event', 'conversion', {
                    'send_to': 'AW-11426343244/CHEXCI6C-IEZEMzSwMgq',
                    'transaction_id': ''
                });
                `}
            </Script>
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
