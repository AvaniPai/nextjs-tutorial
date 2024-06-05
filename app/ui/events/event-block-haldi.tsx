import { InvitedEvents } from "@/app/lib/definitions";
import { mehendiDescription, haldiDescription, sangeetDescription, muhurthamDescription, receptionDescription, shinzenshikiDescription, hiroenDescription } from "@/app/lib/event_descriptions";
import Image from 'next/image';
import Text from 'react';

export function HaldiEventBlock() {
	return (
		<div className={"grid gap-6 grid-cols-2 h-5/6 md:grid-cols-3 mb-2 md:p-3 md:m-10"}>
			<div className="hidden items-center justify-center h-full bg-gray-100 md:block">
				<Image
					src="/events/yellow.png"
					width={1000}
					height={1000}
					className="styles.imagehidden md:flex"
					alt="Illustration of each wedding event."
				/>
			</div>
			<div>
				<h2>Haldi</h2>
				<p>August 28th, 2024</p>
			</div>
			<div className="text-2xl">
				<p>The Haldi ceremony is a cherished pre-wedding tradition in Indian weddings, celebrated with enthusiasm and joy. Typically held a day or two before the wedding, this ritual involves the application of a turmeric paste to the bride and groom&apos;s face, neck, hands, and feet by their close family members and friends. The paste, made from turmeric, sandalwood, and rose water, symbolizes purification and protection.</p>
				<p>The ceremony area is adorned with vibrant decorations, including marigold flowers and colorful fabrics, creating an auspicious and festive atmosphere. Participants, often dressed in simple, traditional clothes in shades of yellow, join in singing, music, and sometimes dancing, adding to the joyful ambiance.</p>
				<p>The Haldi ceremony holds deep cultural and emotional significance. Turmeric, known for its antiseptic and beautifying properties, purifies and protects the couple, bringing good luck and blessings. This ritual marks the start of the wedding festivities, symbolizing the couple&apos;s readiness for their sacred union. It also serves as a time for bonding and celebration, filled with laughter and joyous moments.</p>
				<p>Join us in celebrating this beautiful and meaningful pre-wedding ritual as we prepare for the wedding day with love and blessings!</p>
			</div>
		</div>
	)
}