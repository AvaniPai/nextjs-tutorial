import { InvitedEvents } from "@/app/lib/definitions";
import { mehendiDescription, haldiDescription, sangeetDescription, muhurthamDescription, receptionDescription, shinzenshikiDescription, hiroenDescription } from "@/app/lib/event_descriptions";
import Image from 'next/image';
import Text from 'react';

export function ReceptionEventBlock() {
	return (
		<div className={"grid gap-6 grid-cols-2 h-5/6 md:grid-cols-3 mb-2 md:p-3 md:m-10"}>
			<div className="hidden items-center justify-center h-full bg-gray-100 md:block">
				<Image
					src="/events/catpng.png"
					width={1000}
					height={1000}
					className="styles.imagehidden md:flex"
					alt="Illustration of each wedding event."
				/>
			</div>
			<div>
				<h2>Reception</h2>
				<p>August 31th, 2024</p>
			</div>
			<div className="text-2xl">
				<p>The wedding reception is the highlight of Indian weddings, held in the evening of the wedding day. This grand event marks the culmination of the wedding festivities, bringing together family, friends, and acquaintances from both sides to celebrate the newlywed couple. Set in a lavish venue adorned with beautiful decorations, the reception creates an elegant and festive ambiance.</p>
				<p>The bride and groom don their finest attire, with the bride often wearing a stunning saree or lehenga and the groom in a sherwani or suit. The evening begins with a warm welcome and greetings, followed by performances. Guests offer their congratulations and blessings to the couple, enjoying a sumptuous feast. The reception is also a time for speeches, toasts, and numerous photo sessions, capturing the joyous memories of the day.</p>
				<p>Beyond the festivities, the reception holds deep significance. It celebrates the union of the couple, introduces them to the extended community, and serves as an expression of joy and togetherness.</p>
				<p>Join us in celebrating this grand occasion, as we come together to honor the love and union of the newlyweds!</p>
			</div>
		</div>
	)
}