import { GoogleMapsEmbed } from "@next/third-parties/google";
import Link from "next/link";

export default function Page() {

    return (
        <main>
            <div className="flex items-center flex-col">
            <GoogleMapsEmbed
                apiKey="AIzaSyAnvgcJPM0khBrQhHEyDDA1LGbFVbGSd60"
                width={600}
                height={250}
                mode="place"
                q="Chicago+Marriott+Naperville+Naperville,Illinois,USA" />
            <h1 className="mt-6">Chicago Marriott Naperville</h1>
            <h1>1801 N Naper Blvd</h1>
            <h1>Naperville, IL 60565</h1>
            <h1 className="mb-2">United States of America</h1>
            <Link href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1715624267227&key=GRP&app=resvlink"
            className="flex h-10 items-center rounded-lg bg-emerald-600 px-4 text-md font-medium text-white transition-colors hover:bg-emerald-500"
            >Book a Room</Link>
            </div>
        </main>
    );
}