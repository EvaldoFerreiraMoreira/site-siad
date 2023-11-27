import Banner from "./components/Banner";
import BannerConsultant from "./components/BannerConsultant";
import BannerLeft from "./components/BannerLeft";
import BannerRight from "./components/BannerRight";
import CarrosselFotos from "./components/CarrosselFotos";
import CarrosselInfo from "./components/CarrosselInfo";
import MobilePresentation from "./components/MobilePresentation";
import TextCenter from "./components/TextCenter";


export default function Home() {
  return (
    <div className="flex flex-col pt-24">
      <div className="flex w-full justify-around p-10">
        <Banner />
      </div>
      <div className=" flex w-full p-10">
        <TextCenter />
      </div>
      <div className="flex w-full p-10">
        <BannerRight button={"Experimente"} img={"IMG-01.png"} description={"Com a Nota Fiscal do Consumidor eletrônica NFC-e você pode emitir com rapidez e facilidade através do SIAD ,  um ERP de gestão eficiente, sua função consiste em oferecer as informações sobre o produto adquirido, como valor de compra, tributos e demais características. A emissão da NFC-e é fundamental para fins de fiscalização e comprovação tributária e pode ser emitido e armazenado eletronicamente pelo SIAD.  "} title={"Nota fiscal do consumidor eletrônica  NFCe"} colortitle={"3D5685"} colordescription={"666666"} />
      </div>
      <div className="flex w-full p-10">
        <BannerLeft title={"Manifestador de Notas Fiscais"} description={"O Software aplicativo de manifestação do destinatário é um programa que, após instalado na máquina do contribuinte, permite a manifestação do destinatário de uma nota fiscal eletrônica , permitindo o download de arquivo XML da NF-e e validação de arquivo XML da NF-e recebido do emitente."} img={"IMG-01.png"} colorTitle={"303666"} colorDescription={"68686F"} />
      </div>
      <div className="flex w-full p-10 bg-[#3D5685] ">
        <BannerRight button={"Experimente"} img={"IMG-01.png"} description={"O certificado digital e-CNPJ A1 permite emissão de Nota Fiscal Eletrônica, Nota Fiscal de Serviços Eletrônica e Nota Fiscal de Consumidor. Emitimos e instalamos em sua máquina , entre em contato conosco e saiba mais !"} title={"Certificado Digital"} colortitle={"FFFFFF"} colordescription={"FFFFFF"} />
      </div>
      <div className="flex w-full p-10 bg-[#3D5685] ">
        <BannerLeft title={"Lorem Ipsum"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type "} img={"IMG-01.png"} colorTitle={"FFFF"} colorDescription={"FFFF"} />
      </div>
      <div className=" flex w-full p-10  bg-[#F1F4F9]">
        <MobilePresentation />
      </div>
      <div className="border bg-[#3D5685]">
        <CarrosselInfo />
      </div>
      <div className="p-10 bg-[#F1F4F9]">
        <BannerConsultant/>
      </div>
      <div className="border bg-[#3D5685]">
      <CarrosselFotos/>
      </div>
    </div>
  )
}
