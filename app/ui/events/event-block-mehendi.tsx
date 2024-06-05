import { InvitedEvents } from "@/app/lib/definitions";
import { mehendiDescription, haldiDescription, sangeetDescription, muhurthamDescription, receptionDescription, shinzenshikiDescription, hiroenDescription } from "@/app/lib/event_descriptions";
import Image from 'next/image';
import Text from 'react';

export function MehendiEventBlock() {
	return (
		<div className={"grid gap-6 grid-cols-2 h-5/6 md:grid-cols-3 mb-2 md:p-3 md:m-10"}>
			<div className="hidden items-center justify-center h-full bg-gray-100 md:block">
				<Image
					src="/events/green.png"
					width={1000}
					height={1000}
					className="styles.imagehidden md:flex"
					alt="Illustration of each wedding event."
				/>
			</div>
			<div>
				<h2>Mehendi</h2>
				<p>August 28th, 2024</p>
			</div>
			<div className="text-2xl">
				<p>The Mehendi ceremony is one of the most cherished and vibrant pre-wedding events in Indian weddings, celebrated with great enthusiasm and joy. Traditionally held a few days before the wedding, this occasion involves the intricate application of henna paste to the bride&apos;s hands and feet, creating beautiful, elaborate designs. Skilled Mehendi artists weave patterns that often include the groom&apos;s name or initials, symbolizing the union of the couple.</p>
				<p>The ceremony is not just about applying Mehendi; it is a festive gathering filled with music, singing, and dancing. The venue is adorned with flowers, colorful fabrics, and lights, creating a lively and inviting atmosphere. The bride, dressed in vibrant traditional attire, along with her friends and family, participates in the celebrations, sharing laughter and joy.</p>
				<p>Beyond its artistic beauty, Mehendi holds deep cultural and emotional significance. It is believed to bring good luck and positive spirits to the bride and groom. The color and longevity of the Mehendi stain symbolize the strength of the marriage, with darker Mehendi representing deeper love and affection. This ritual also serves as a time for bonding and creating lasting memories, as the bride and her loved ones come together to celebrate her journey into marriage.</p>
				<p>Join us in celebrating this beautiful tradition, where art, culture, and joy come together to mark the beginning of a new chapter in the bride&apos;s life.</p>
			</div>
		</div>
	)
}