import { GoogleMapsEmbed } from "@next/third-parties/google";
import Link from "next/link";
import Image from "next/image";
import { quicksand } from "@/app/ui/fonts";

export default function Page() {

    return (
        <main>
            <div className="flex items-center flex-col">
                <Image
                    className="hidden sm:block"
                    src="/building_ryokan.png"
                    width={400}
                    height={400}
                    alt="cute illustration of a blue hotel building"
                />
                <Image
                    className="block sm:hidden"
                    src="/building_ryokan.png"
                    width={200}
                    height={200}
                    alt="cute illustration of a blue hotel building"
                />
                <h1 className={`mt-4 text-xs sm:text-xl whitespace-pre`}>Accommodations</h1>
                <a href="https://maps.app.goo.gl/LJVCfHy6YdV8Gm8u6" className="underline decoration-sky-700" target="_blank" rel="noopener noreferrer">
                    Yuraku
				</a>
                <a href="https://maps.app.goo.gl/ewCnCiM1zAWm1UfC8" className="underline decoration-sky-700" target="_blank" rel="noopener noreferrer">
                    Awara Onsen Grand Hotel
				</a>
                <a href="https://maps.app.goo.gl/cbEoUy4nanFzQF9ZA" className="underline decoration-sky-700" target="_blank" rel="noopener noreferrer">
                    Minoya
				</a>
                <br />
                <div className="max-w-xl text-center mb-6 text-pretty sm:text-xl">
                    <article></article><br />
                    <article>
                        We thought it would be difficult for our guests who were coming from far away outside the prefecture or from overseas to attend the wedding on a day trip, so we made a tentative reservation at a ryokan in Ashihara Onsen, the groom&apos;s hometown.
                    </article>
                    <article>
                        (For Guests from overseas Check-in Friday, November 29<sup>th</sup> - Check-out Sunday, December 1<sup>st</sup> )
                    </article>
                    <article>
                        (For Guests from outside Fukui Check-in Saturaday, November 30<sup>th</sup> - Check-out Sunday, December 1<sup>st</sup> )
                    </article>
                    <br/>
                    <article>
                        As soon as we have confirmed the number of people attending the wedding party, we will contact you to let you know which of the three hot spring inns you will be staying at.
                    </article>
                    <br/>
                </div>

                {/* <a href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1715624267227&key=GRP&app=resvlink"
                    className="flex h-10 items-center rounded-lg bg-teal-600 px-4 text-md font-medium text-white transition-colors hover:bg-teal-500 mb-4"
                    target="_blank" rel="noopener noreferrer"
                >Book a Room</a> */}
                <div className="hidden sm:block">
                <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1fsrZ02KjHOMuKCt7FZpJHFnC4aX-3z8&ehbc=2E312F" width="640" height="480"></iframe>
                </div>
                <div className="block sm:hidden">
                <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1fsrZ02KjHOMuKCt7FZpJHFnC4aX-3z8&ehbc=2E312F" width="320" height="240"></iframe>
                </div>
            </div>
        </main>
    );
}