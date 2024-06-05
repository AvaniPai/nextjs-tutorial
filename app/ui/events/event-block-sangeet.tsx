import { InvitedEvents } from "@/app/lib/definitions";
import { mehendiDescription, haldiDescription, sangeetDescription, muhurthamDescription, receptionDescription, shinzenshikiDescription, hiroenDescription } from "@/app/lib/event_descriptions";
import Image from 'next/image';
import Text from 'react';

export function SangeetEventBlock() {
	return (
		<div className={"grid gap-6 grid-cols-2 h-5/6 md:grid-cols-3 mb-2 md:p-3 md:m-10"}>
			<div className="hidden items-center justify-center h-full bg-gray-100 md:block">
				<Image
					src="/events/blue.png"
					width={1000}
					height={1000}
					className="styles.imagehidden md:flex"
					alt="Illustration of each wedding event."
				/>
			</div>
			<div>
				<h2>Sangeet</h2>
				<p>August 30th, 2024</p>
			</div>
			<div className="text-2xl">
				<p>The Sangeet is one of the most vibrant and anticipated events in Indian weddings, celebrated with unparalleled enthusiasm and joy. Held a few days before the wedding, this festive occasion brings together family and friends for an evening of music, dance, and merriment. The heart of the Sangeet lies in its lively dance performances and melodious singing sessions, where choreographed dances to Bollywood songs and traditional folk songs fill the air. With stunning decorations and guests dressed in colorful, traditional attire, the Sangeet creates a festive and inviting ambiance.</p>
				<p>Beyond the fun and entertainment, the Sangeet holds significant cultural and emotional value. It symbolizes the joyous union of two families, providing a platform for bonding and celebration. Rooted in Indian traditions, the Sangeet showcases regional customs and stories, setting a joyful tone for the wedding festivities. It is a celebration of love, culture, and community, making it an integral and unforgettable part of the wedding celebrations.</p>
				<p>Join us as we dance, sing, and celebrate this joyous event!</p>
			</div>
		</div>
	)
}