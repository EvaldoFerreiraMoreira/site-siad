import Banner from "./components/Banner";
import BannerConsultant from "./components/BannerConsultant";
import BannerLeft from "./components/BannerLeft";
import BannerRight from "./components/BannerRight";
import CarroselMobile from "./components/CarroselMobile";
import CarrosselFotos from "./components/CarrosselFotos";
import CarrosselInfo from "./components/CarrosselInfo";
import MobilePresentation from "./components/MobilePresentation";
import TextCenter from "./components/TextCenter";
import Script from 'next/script';


export default function Home() {
  return (
    <div className="flex flex-col pt-24">
      {/* Google Analytics */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-11426343244" />
      <Script id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
 
          gtag('config', 'AW-11426343244');
        `}
      </Script>

      {/* SmartLook */}
      <Script async type="text/javascript" src="https://web-sdk.smartlook.com/recorder.js" />
      <Script id="smartlook-analytics">
        {`
        window.smartlook||(function(d) {
          var o=smartlook=function(){ o.api.push(arguments); },h=d.getElementsByTagName('head')[0];
          var c=d.createElement('script'); o.api=new Array(); c.async=true; c.type='text/javascript';
          c.charset='utf-8'; c.src='https://web-sdk.smartlook.com/recorder.js'; h.appendChild(c);
        })(document);
        smartlook('init', '81f55b3a5310a59c1d072225aa149505d4f1dfd2', { region: 'eu' });
      `}
      </Script>
      <div className="flex w-full justify-around p-10">
        <Banner />
      </div>
      <div className=" flex w-full p-10 mb-20">
        <TextCenter />
      </div>
      <div className="flex w-full p-10">
        <BannerRight button={"Experimente"} img={"Notafiscal.png"} description={"Emita suas notas fiscais de forma simples e rápida e sem limite de NF-e e NFC-e, enviando o xml e o pdf para seu cliente sem dificuldade."} title={"Nota fiscal eletrônica"} colortitle={"3D5685"} colordescription={"68686F"} />
      </div>
      <div className="flex w-full p-10">
        <BannerLeft title={"Manifestador de Notas Fiscais"} description={"O Manifestador de Notas Fiscais é um software que permite aos destinatários manifestarem o conhecimento sobre uma NF-e. Facilita o download e validação do arquivo XML da NF-e recebido do emitente."} img={"IMG-02.png"} colorTitle={"3D5685"} colorDescription={"68686F"} />
      </div>
      <div className="flex w-full p-10 bg-[#3D5685] ">
        <BannerRight button={"Experimente"} img={"IMG-03.png"} description={"O certificado digital e-CNPJ A1 permite emissão de Nota Fiscal Eletrônica, Nota Fiscal de Serviços Eletrônica e Nota Fiscal de Consumidor."} title={"Certificado Digital"} colortitle={"FFFFFF"} colordescription={"FFFFFF"} />
      </div>
      <div className="flex w-full p-10 bg-[#3D5685] ">
        <BannerLeft title={"Gráfico Comparativo de Vendas"} description={"O Gráfico de vendas mês a mês te permite fazer um comparativo de faturamento mensal e compara-lo com o mesmo período em outro ano."} img={"IMG-04.png"} colorTitle={"FFFF"} colorDescription={"FFFF"} />
      </div>
      <div className="flex w-full p-10 bg-[#F1F4F9]">
        <CarroselMobile />
      </div>
      <div className="border bg-[#3D5685]">
        <CarrosselInfo />
      </div>
      <div className="p-10 bg-[#F1F4F9]">
        <BannerConsultant />
      </div>
      <div className="border bg-[#3D5685]">
        <CarrosselFotos />
      </div>
    </div>
  )
}
