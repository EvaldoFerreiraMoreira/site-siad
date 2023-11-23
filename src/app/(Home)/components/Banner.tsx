import Image from "next/image";

const Banner = () => {
    return (
        <div className="text-[#A7A7A7]">
            <div className="flex w-56 font-semibold text-2xl">
                <h1>Lorem <span className="text-[#3D5685]">Ipsum </span>is simply <span className="text-[#3D5685]">dummy </span>text of <span className="text-[#3D5685]">the </span> printing </h1>
            </div>
            <div className="mt-6 text-sm text-justify">
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type  </p>
            </div>
            <div className="flex mt-10 h-56 justify-center">
                <Image
                    src="/PC-01.png"
                    alt="Compiuter"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-auto w-auto max-w-[100%] max-h-[90%]"
                    style={{
                        objectFit: "contain",
                    }}
                />
            </div>
        </div>
    );
}

export default Banner;