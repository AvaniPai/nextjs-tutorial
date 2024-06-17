import { birthstonebounce } from "@/app/ui/fonts";
import Image from "next/image";

export default function Page() {
    return (
        <div className="flex flex-col justify-center">
            <h1 className={` ${birthstonebounce.className} text-center text-8xl`}>Coming Soon!</h1>
            <Image
                src="/cutie_cons_ss.png"
                width={600}
                height={400}
                alt="Cute illustration of a sandbag holding an under construction sign."
                className="mt-10 place-self-center"
            />
        </div>
    )
}