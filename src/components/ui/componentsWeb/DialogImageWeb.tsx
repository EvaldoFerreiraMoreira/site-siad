import { Button } from "@/components/ui/button";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


import React from "react";

import Image from "next/image";

interface img {
    imagem: String

}
const DialogImageWEB = (prop: img) => {
    const i = "/" + prop.imagem;

    return (
        <Dialog>

            <DialogTrigger asChild>
                <Button className="bg-transparent w-full h-full  " variant={"link"}>
                    <Image
                        src={i}
                        alt="Compiuter"
                        width={0}
                        height={0}
                        sizes="700vw"
                        className="h-auto w-auto max-w-[100%] max-h-[100%] rounded-md"
                        style={{
                            objectFit: "contain",
                        }}
                    />
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[70%] bg-white {
                
            }]">

                <div className=" flex flex-col justify-center align-center  w-[100%] h-[100%]  ">

                    <Image
                        src={i}
                        alt="Siad Sistemas"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-auto w-auto max-w-[100%] max-h-[100%]"
                        style={{
                            objectFit: "contain",
                        }}
                    />
                </div>

            </DialogContent>
        </Dialog >
    );
}
export default DialogImageWEB;