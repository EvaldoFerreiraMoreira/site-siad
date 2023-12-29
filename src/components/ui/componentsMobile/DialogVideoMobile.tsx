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
                    <PlayCircleIcon size={80} className="absolute mb-48 ml-28 text-[#3D5685]" />
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[38%] bg-white">
                <div className=" flex justify-center align-center">
                    <ReactPlayer url={video} playing={true} loop={true} style={{width:"1000px"}}/>
                </div>

            </DialogContent>
        </Dialog >
    );
}
export default DialogVideoMobile;