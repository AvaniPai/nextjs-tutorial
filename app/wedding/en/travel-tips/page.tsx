import { birthstonebounce } from "@/app/ui/fonts";
import Image from "next/image";

export default function Page() {
    return (
        <div className="flex flex-col justify-center">
            <h1 className={` ${birthstonebounce.className} text-center text-8xl`}>Coming Soon!</h1>
        </div>
    )
}