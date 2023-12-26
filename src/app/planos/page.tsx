import BannerCarrossel from "./components/BannerCarrossel";
import BannerContato from "./components/BannerContato";
import BannerPlanos from "./components/BannerPlanos";
import CardGratis from "./components/CardGratis";
import CarrosselPlanos from "./components/CarrosselPlanos";
import CommonQuestion from "./components/CommonQuestion";
import FuncSiadBanner from "./components/FuncSiadBanner";
import Script from 'next/script';

const Planos = () => {
    return (
        <div className="flex flex-col pt-16">
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
            <div className=" flex w-full p-10 bg-[#f1f4f9]">
                <BannerPlanos />
            </div>
            <div className="bg-[#f1f4f9]" id="carrosselPlanos">
                <div className=" relative w-full bg-[#f1f4f9] h-40">
                    <div className="relative pt-0 z-10">
                        <CarrosselPlanos />
                    </div>
                </div>
                <div className=" relative w-full bg-[#3D5685] h-[40rem]">
                    <div className="pt-[35rem]">
                        <CardGratis />
                    </div>
                </div>
            </div>
            <div className=" flex w-full p-10  bg-[#f1f4f9] h-56 ">

            </div>

            <div className="bg-[#f1f4f9] w-full  flex justify-center  items-center align-center pt-10 h-auto">
                <BannerCarrossel />
            </div>
            <div className=" flex w-full p-10 bg-white">
                <CommonQuestion />
            </div>
            <div className=" flex w-full p-10 bg-[#f1f4f9]">
                <FuncSiadBanner />
            </div>

            <div className="flex w-full p-10 bg-[#3D5685]  ">
                <BannerContato />
            </div>
        </div>
    );
}

export default Planos;