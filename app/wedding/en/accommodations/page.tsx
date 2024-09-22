import { GoogleMapsEmbed } from "@next/third-parties/google";
import Link from "next/link";
import Image from "next/image";
import { quicksand } from "@/app/ui/fonts";

export default function Page() {

    return (
        <main>
            <div className="flex items-center flex-col">
                <Image
                    src="/hotel_illus_one.png"
                    width={400}
                    height={400}
                    alt="cute illustration of a blue hotel building"
                />
                <h1 className={`mt-4 text-xs sm:text-xl whitespace-pre`}>CHICAGO MARRIOTT NAPERVILLE </h1>
                <h1 className="text-xs sm:text-xl">1801 N NAPER BLVD NAPERVILLE, IL 60565 USA</h1>
                <h1 className="text-xs sm:text-xl">+1 (630) 505-4900</h1>
                <br />
                <div className="max-w-md text-center mb-6 text-pretty sm:text-xl">
                    <article>Wedding Guest Special Rate:<br className="sm:hidden"/> $139-$159/night</article><br />
                    <article>We have secured a room block at the Chicago Marriott Naperville in Naperville, IL.
                        Rooms are available starting from Tuesday, August 27<sup>th</sup> until Monday, September 2<sup>nd</sup>.
                    </article>
                    <br/>
                    <article>The hotel is about a 5 minute drive (or a 30 minute walk if you&apos;re up for it!) from The Crawford, where the Muhurtham and Reception will be held.
                        We will also be arranging transport between the hotel and the respective venues for wedding events taking place on Friday, August 30<sup>th</sup> and Saturday, August 31<sup>st</sup>.
                    </article>
                    <br/>
                    <article>
                        If you choose to book a room at the Marriott, please visit our affiliate link by clicking on the button below.
                    </article>
                </div>

                <a href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1715624267227&key=GRP&app=resvlink"
                    className="flex h-10 items-center rounded-lg bg-teal-600 px-4 text-md font-medium text-white transition-colors hover:bg-teal-500 mb-4"
                    target="_blank" rel="noopener noreferrer"
                >Book a Room</a>
                <div className="hidden sm:block">
                    <GoogleMapsEmbed
                        apiKey="AIzaSyAnvgcJPM0khBrQhHEyDDA1LGbFVbGSd60"
                        width={600}
                        height={250}
                        mode="place"
                        q="Chicago+Marriott+Naperville+Naperville,Illinois,USA"
                    />
                </div>
                <div className="block sm:hidden">
                    <GoogleMapsEmbed
                        apiKey="AIzaSyAnvgcJPM0khBrQhHEyDDA1LGbFVbGSd60"
                        width={300}
                        height={250}
                        mode="place"
                        q="Chicago+Marriott+Naperville+Naperville,Illinois,USA"
                    />
                </div>
            </div>
        </main>
    );
}