import { Button } from "@/components/ui/button";

import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import ReactPlayer from 'react-player';
import React from "react";
import { PlayCircleIcon } from "lucide-react";

interface DialogVideoMobileProps {
    video: string
}

const DialogVideoMobile = ({ video }: DialogVideoMobileProps) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="w-full h-full" variant={"link"}>
                    <PlayCircleIcon size={80} className="absolute mb-56 text-[#3D5685] opacity-70" />
                </Button>
            </DialogTrigger>
            <DialogContent className="flex justify-center items-center bg-white">
                <div className="">
                    <ReactPlayer url={video} playing={true} loop={true} height={230} width={300}/>
                </div>

            </DialogContent>
        </Dialog >
    );
}
export default DialogVideoMobile;