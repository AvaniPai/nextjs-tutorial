import { InvitedEvents } from "@/app/lib/definitions";
// import { mehendiDescription, haldiDescription, sangeetDescription, muhurthamDescription, receptionDescription, shinzenshikiDescription, hiroenDescription } from "@/app/lib/event_descriptions";
import Image from 'next/image';
import Link from "next/link";

export default function EventBlock({ invites }: { invites: InvitedEvents }) {
	var events = [];
	const mehendi = invites.all_events || invites.all_us_japan;
	const haldi = invites.all_events || invites.all_us_japan;
	const sangeet = invites.sangeet_reception_only || invites.sanmuhrec || invites.all_events || invites.all_us_japan;
	const muhurtham = invites.sanmuhrec || invites.all_events || invites.all_us_japan;
	const reception = invites.sangeet_reception_only || invites.sanmuhrec || invites.reception_only || invites.all_events || invites.all_us_japan;
	const shinzenshiki = invites.all_us_japan;

	return (
		<div className="">
			<div className="hidden xl:block">
				{mehendi && <MehendiEventBlock />}
				{haldi && <HaldiEventBlock />}
				{sangeet && <SangeetEventBlock />}
				{muhurtham && <MuhurthamEventBlock />}
				{reception && <ReceptionEventBlock />}
				{shinzenshiki && <ShinzensikiEventBlock/>}
				{shinzenshiki && <HiroenEventBlock/>}
			</div>
			<div className="block xl:hidden">
				{mehendi && <MehendiEventBlockSm />}
				{haldi && <HaldiEventBlockSm />}
				{sangeet && <SangeetEventBlockSm />}
				{muhurtham && <MuhurthamEventBlockSm />}
				{reception && <ReceptionEventBlockSm />}
				{/* {shinzenshiki && <HiroenEventBlockSm/>} */}
			</div>
		</div>
	)
}
export function MehendiEventBlock() {
	return (
		<div className={"grid grid-cols-2 grid-rows-2 gap-4"}>
			<div className="items-center justify-center h-full flex">
				<Image
					src="/events/mehendi.png"
					width={700}
					height={700}
					className="styles.image flex"
					alt="Illustration of each wedding event."
				/>
			</div>
			<div className="space-y-10 p-8 px-20 text-2xl">
				<h2 className="text-4xl ">MEHENDI</h2>
					<p>
						<a className="text-darksage">Date: </a>
						Wednesday, August 28<sup>th</sup> at 6:00pm
					</p>
				<p>
					<a className="text-darksage">Location: </a> 
					<a href="https://maps.app.goo.gl/dgZsd2o6BUWKvmy5A" className="underline decoration-sky-700" target="_blank" rel="noopener noreferrer">
						712 Kaiser Court, Naperville, IL 60565
					</a>
				</p>
				<div>
					<p className="text-darksage">Program:</p>
					<br/>
					<div className="grid grid-cols-2">
						<p>6:00 to 6:30pm</p>
						<p>Arrival of Guests</p>
						<p>6:00 to 8:00pm</p>
						<p>Mehendi for Bride & Groom</p>
						<p>7:00 to 10:00pm</p>
						<p>Mehendi for Bridal Party, Family & Guests</p>
						<p>7:00 to 8:30pm</p>
						<p>Dinner & Drinks</p>
						<p>8:30 to 10:00pm</p>
						<p>Music & Dance</p>
					</div>
				</div>
				<p> 
					<a className="text-darksage">Attire</a>
					<br/>
					Traditional Indian attire in shades of green
				</p>
				<div>
					<Link href="/wedding/rsvp"
						className="py-4 items-center rounded-lg bg-darksage px-4 text-md font-medium text-white transition-colors hover:bg-sage mb-4"
					>Link to RSVP</Link>
				</div>
			</div>
			<div className="col-span-2 text-2xl overflow-y-auto text-center mt-6">
				<h2 className="text-4xl">Mehendi - Intricate Henna Ritual For the Bride</h2>
				<br/>
				<p className="indent-8">
					The Mehendi ceremony is one of the most cherished and vibrant pre-wedding events in Indian weddings, celebrated with great enthusiasm and joy. Traditionally held a few days before the main ceremony, this occasion involves the intricate application of henna paste to the bride&apos;s hands and feet, creating beautiful, elaborate designs. Skilled Mehendi artists weave patterns that often include the groom&apos;s name or initials, symbolizing the union of the couple.
				</p>
				<br/>
				<p className="indent-8">
					The ceremony is more than just about applying Mehendi; it is a festive gathering filled with music, singing, and dancing. The venue is adorned with flowers, colorful fabrics, and lights, creating a lively and inviting atmosphere. The bride, dressed in vibrant traditional attire, along with her friends and family, participates in the celebrations, sharing laughter and joy.
				</p>
				<br/>
				<p className="indent-8">Beyond its artistic beauty, Mehendi holds deep cultural and emotional significance. It is believed to bring good luck and positive spirits to the bride and groom. The color and longevity of the Mehendi stain symbolize the strength of the marriage, with darker Mehendi representing deeper love and affection. This ritual also serves as a time for bonding and creating lasting memories, as the bride and her loved ones come together to celebrate her journey into marriage.
				</p>
				<br/>
				<p className="indent-8">Join us in celebrating this beautiful tradition, where art, culture, and joy come together to mark the beginning of a new chapter in the bride&apos;s life.
				</p>
			</div>
		</div>
	)
}

export function HaldiEventBlock() {
	return (
		<div className={"grid grid-cols-2 grid-rows-2 gap-4"}>
			<div className="items-center justify-center h-full flex">
				<Image
					src="/events/haldi.png"
					width={700}
					height={700}
					className="styles.imagehidden md:flex border border-double border-amber-500 p-10 border-8"
					alt="Illustration of each wedding event."
				/>
			</div>
			<div className="space-y-10 p-8 px-20 text-2xl">
				<h2 className="text-4xl ">HALDI</h2>
					<p>
						<a className="text-amber-500">Date: </a> 
						Thursday, August 29<sup>th</sup> at 10:30am
					</p>
					<p>
						<a className="text-amber-500">Location: </a> 
						<a href="https://maps.app.goo.gl/dgZsd2o6BUWKvmy5A" className="underline decoration-sky-700" target="_blank" rel="noopener noreferrer">
							712 Kaiser Court, Naperville, IL 60565
						</a>
					</p>
				<div>
					<p className="text-amber-500">Program:</p>
					<br />
					<div className="grid grid-cols-2">
						<p>10:30 to 10:45am</p>
						<p>Arrival of Guests</p>
						<p>10:45 to 11:00am</p>
						<p>Light Snacks & Beverages</p>
						<p>11:00 to 11:45am</p>
						<p>Haldi Ceremony</p>
						<p>11:45 to 01:00pm</p>
						<p>Music & Dance</p>
						<p>1:00 to 2:30pm</p>
						<p>Lunch</p>
					</div>
				</div>
				<p>
					<a className="text-amber-500">Attire</a>
					<br/>
					Traditional Indian attire in shades of yellow & white combination
				</p>
				<div>
					<Link href="/wedding/rsvp"
						className="py-4 items-center rounded-lg bg-amber-500 px-4 text-md font-medium text-white transition-colors hover:bg-amber-400 mb-4"
					>Link to RSVP</Link>
				</div>
			</div>
			<div className="col-span-2 text-2xl overflow-y-auto text-center mt-6">
				<h2 className="text-4xl">Haldi - An Intimate Ritual to Bless the Bethrothed Couple</h2>
				<br />
				<p className="indent-8">
					The Haldi ceremony is a cherished pre-wedding tradition in Indian weddings, celebrated with enthusiasm and joy. Typically held a day or two before the wedding, this ritual involves the application of a turmeric paste to the bride and groom&apos;s face, neck, hands, and feet by their close family members and friends. The paste, made from turmeric, sandalwood, and rose water, symbolizes purification and protection.
				</p>
				<br/>
				<p className="indent-8">
					The ceremony area is adorned with vibrant decorations, including marigold flowers and colorful fabrics, creating an auspicious and festive atmosphere. Participants, often dressed in simple, traditional clothes in shades of yellow, join in singing, music, and sometimes dancing, adding to the joyful ambiance.
				</p>
				<br/>
				<p className="indent-8">
					The Haldi ceremony holds deep cultural and emotional significance. Turmeric, known for its antiseptic and beautifying properties, purifies and protects the couple, bringing good luck and blessings. This ritual marks the start of the wedding festivities, symbolizing the couple&apos;s readiness for their sacred union. It also serves as a time for bonding and celebration, filled with laughter and joyous moments.
				</p>
				<br/>
				<p className="indent-8">
					Join us in celebrating this beautiful and meaningful pre-wedding ritual as we prepare for the wedding day with love and blessings!
				</p>
			</div>
		</div>
	)
}

export function SangeetEventBlock() {
	return (
		<div className={"grid grid-cols-2 grid-rows-2 gap-4"}>
			<div className="hidden items-center justify-center h-full sm:flex">
				<Image
					src="/events/sangeet.png"
					width={700}
					height={700}
					className="styles.imagehidden sm:flex"
					alt="Illustration of each wedding event."
				/>
			</div>
			<div className="space-y-10 p-8 px-20 text-2xl">
				<h2 className="text-4xl ">SANGEET</h2>
				<p>
					<a className="text-blue-600">Date: </a>
					Friday, August 30<sup>th</sup> at 6:00pm
				</p>
				<p>
					<a className="text-blue-600">Location: </a>  
					<a href="https://maps.app.goo.gl/eo6NaDUrbh9yn2i39" className="underline decoration-sky-700" target="_blank" rel="noopener noreferrer">
						Apollo Room, The Matrix Club 808 S Route 59, Naperville IL 60540
					</a>
				</p>
				<div>
					<p className="text-blue-600">Program:</p>
					<br/>
					<div className="grid grid-cols-2">
						<p>6:00 to 10:00pm</p>
						<p>Open Bar</p>
						<p>6:00 to 6:30pm</p>
						<p>Arrival of Guests</p>
						<p>6:30 to 7:15pm</p>
						<p>Performances</p>
						<p>7:15 to 8:15pm</p>
						<p>Dinner</p>
						<p>7:30 to 10:00pm</p>
						<p>Mehendi (for interested guests)</p>
						<p>8:15 to 10:00pm</p>
						<p>Music & Dance</p>
					</div>
				</div>
				<p>
					<a className="text-bold text-blue-600">Attire</a>
					<br/>
					Traditional Indian attire in bright colors recommended
				</p>
				<div>
					<Link href="/wedding/rsvp"
						className="py-4 items-center rounded-lg bg-blue-600 px-4 text-md font-medium text-white transition-colors hover:bg-blue-400 mb-4"
					>Link to RSVP</Link>
				</div>
			</div>
			<div className="col-span-2 text-2xl overflow-y-auto text-center mt-6">
				<h2 className="text-4xl">Sangeet - A Joyous Pre-Wedding Celebration</h2>
				<br/>
				<p className="indent-8">
					The Sangeet is one of the most vibrant and anticipated events in Indian weddings, celebrated with unparalleled enthusiasm and joy. Held a few days before the wedding, this festive occasion brings together family and friends for an evening of music, dance, and merriment. The heart of the Sangeet lies in its lively dance performances and melodious singing sessions, where choreographed dances to Bollywood songs and traditional folk songs fill the air. With stunning decorations and guests dressed in colorful, traditional attire, the Sangeet creates a festive and inviting ambiance.
				</p>
				<br/>
				<p className="indent-8">
					Beyond the fun and entertainment, the Sangeet holds significant cultural and emotional value. It symbolizes the joyous union of two families, providing a platform for bonding and celebration. Rooted in Indian traditions, the Sangeet showcases regional customs and stories, setting a joyful tone for the wedding festivities. It is a celebration of love, culture, and community, making it an integral and unforgettable part of the wedding celebrations.
				</p>
				<br/>
				<p className="indent-8">
					Join us as we dance, sing, and celebrate this joyous event!
				</p>
			</div>
		</div>
	)
}
export function MuhurthamEventBlock() {
	return (
		<div className={"grid grid-cols-2 grid-rows-2 gap-4"}>
			<div className="hidden items-center justify-center h-full sm:flex">
				<Image
					src="/events/muhurtham.png"
					width={700}
					height={700}
					className="styles.imagehidden sm:flex"
					alt="Illustration of each wedding event."
				/>
			</div>
			<div className="space-y-10 p-8 sm:px-20 text-2xl">
				<h2 className="text-4xl ">MUHURTHAM</h2>
				<p>
					<a className="text-darkmaroon">Date: </a>
					Saturday, August 31<sup>st</sup> at 10:45am
				</p>
				<p>
					<a className="text-darkmaroon">Location: </a>
					<a href="https://maps.app.goo.gl/s396XvHBXeNMwJFX6" className="underline decoration-sky-700" target="_blank" rel="noopener noreferrer">
						The Crawford, 119 Shuman Blvd, Naperville IL 60563
					</a>
				</p>
				<div>
					<p className="text-darkmaroon">Program:</p>
					<br/>
					<div className="grid grid-cols-2">
						<p>10:45 to 11:00am</p>
						<p>Arrival of Guests</p>
						<p>11:00 to 11:15am</p>
						<p>Light Snacks & Beverages</p>
						<p>11:15 to 11:45pm</p>
						<p>Baraat</p>
						<p>11:45 to 1:15pm</p>
						<p>Lagnam</p>
						<p>1:15 to 2:15pm</p>
						<p>Lunch</p>
						<p>2:15 to 3:00pm</p>
						<p>Photo Shoot</p>
					</div>
				</div>
				<p>
					<a className="text-bold text-darkmaroon">Attire</a>
					<br/>
					Traditional Indian attire is recommended
				</p>
				<div>
					<Link href="/wedding/rsvp"
						className="py-4 items-center rounded-lg bg-darkmaroon px-4 text-md font-medium text-white transition-colors hover:bg-maroon mb-4"
					>Link to RSVP</Link>
				</div>
			</div>
			<div className="col-span-2 text-2xl overflow-y-auto text-center mt-6">
				<h2 className="text-4xl">Muhurtham - The Auspicious Moment in South Indian Weddings</h2>
				<br/>
				<p className="indent-8">
					Muhurtham is a pivotal aspect of South Indian weddings, representing the most auspicious time chosen for the wedding ceremony. This sacred moment is meticulously selected by consulting astrologers who study the horoscopes of the bride and groom. Considering various astrological factors and planetary positions, they determine the ideal time to conduct the wedding rituals.
				</p>
				<br/>
				<p className="indent-8">
					The main wedding rituals, including Baraat, Varapuja, Kanyadanam, Mangalsutra, Varamala, and guests blessing the couple are performed during this time to align with positive cosmic influences. This practice is believed to ensure prosperity, happiness, and harmony in the couple&apos;s married life.
				</p>
				<br/>
				<p className="indent-8">
					Observing Muhurtham holds deep spiritual and cultural significance. It is thought to bring divine blessings, providing spiritual protection and grace to the couple. This tradition reflects the South Indian emphasis on timing and auspiciousness in major life events. Starting the wedding ceremony at the Muhurtham sets a positive tone for the marriage, fostering a foundation of love, trust, and mutual respect. By adhering to this practice, the couple honors cultural and family traditions, gaining the approval and blessings of their community and elders.
				</p>
				<br/>
				<p className="indent-8">
					Join us as we celebrate this sacred tradition, marking the beginning of a beautiful journey together.
				</p>
				<br/>
				<p className="indent-8">
					Please also read the various steps involved in our traditional south Indian wedding ceremony (muhurtham) with the description & significance of each step.
				</p>
			</div>
		</div>
	)
}

export function ReceptionEventBlock() {
	return (
		<div className={"grid grid-cols-2 grid-rows-2 gap-4"}>
			<div className="hidden items-center justify-center h-full sm:flex">
				<Image
					src="/events/reception.png"
					width={700}
					height={700}
					className="styles.imagehidden sm:flex"
					alt="Illustration of each wedding event."
				/>
			</div>
			<div className="space-y-10 p-8 sm:px-20 text-2xl">
				<h2 className="text-4xl ">RECEPTION</h2>
				<p>
					<a className="text-bold text-suedeboots">Date: </a>
					Saturday August 31<sup>st</sup> at 6:00pm
				</p>
				<p><a className="text-bold text-suedeboots">Location: </a>
					<a href="https://maps.app.goo.gl/s396XvHBXeNMwJFX6" className="underline decoration-sky-700" target="_blank" rel="noopener noreferrer">
						The Crawford, 119 Shuman Blvd, Naperville IL 60563
					</a>
				</p>
				<div>
					<p className="text-suedeboots">Program:</p>
					<br/>
					<div className="grid grid-cols-2">
						<p>6:00 to 6:15pm</p>
						<p>Arrival of Guests</p>
						<p>6:15 to 7:15pm</p>
						<p>Cocktails</p>
						<p>7:15 to 8:00pm</p>
						<p>Reception</p>
						<p>8:00 to 9:00pm</p>
						<p>Dinner</p>
						<p>9:00 to 10:00pm</p>
						<p>Photo Shoot</p>
						<p>10:00 to 12:00pm</p>
						<p>Music & Dance</p>
					</div>
				</div>
				<p>
					<a className="text-bold text-suedeboots">Attire</a>
					<br/>
					Western attire. Optional Cocktail Sarees for women
				</p>
				<div>
					<Link href="/wedding/rsvp"
						className="py-4 items-center rounded-lg bg-suedeboots px-4 text-md font-medium text-white transition-colors hover:bg-harvestmoon mb-4"
					>Link to RSVP</Link>
				</div>
			</div>
			<div className="col-span-2 text-2xl overflow-y-auto text-center mt-6">
				<p className="text-4xl ">Reception - A Grand Celebration of Matrimonial Union</p>
				<br/>
				<p className="indent-8">
					The wedding reception is the highlight of Indian weddings, held in the evening of the wedding day. This grand event marks the culmination of the wedding festivities, bringing together family, friends, and acquaintances from both sides to celebrate the newlywed couple. Set in a lavish venue adorned with beautiful decorations, the reception creates an elegant and festive ambiance.
				</p>
				<br/>
				<p className="indent-8">
					The bride and groom don their finest attire, with the bride often wearing a stunning saree or lehenga and the groom in a sherwani or suit. The evening begins with a warm welcome and greetings, followed by performances. Guests offer their congratulations and blessings to the couple, enjoying a sumptuous feast. The reception is also a time for speeches, toasts, and numerous photo sessions, capturing the joyous memories of the day.
				</p>
				<br/>
				<p className="indent-8">
					Beyond the festivities, the reception holds deep significance. It celebrates the union of the couple, introduces them to the extended community, and serves as an expression of joy and togetherness.
				</p>
				<br/>
				<p className="indent-8">
					Join us in celebrating this grand occasion, as we come together to honor the love and union of the newlyweds!
				</p>
			</div>
		</div>
	)
}

export function ShinzensikiEventBlock () {
	return (
		<div className={"grid grid-cols-2 grid-rows-2 gap-4"}>
			<div className="hidden items-center justify-center h-full sm:flex">
				<Image
					src="/events/shinzenshiki.png"
					width={700}
					height={700}
					className="styles.imagehidden sm:flex"
					alt="Illustration of each wedding event."
				/>
			</div>
			<div className="space-y-10 p-8 sm:px-20 text-2xl">
				<h2 className="text-4xl ">SHINZENSHIKI</h2>
				<p>
					<a className="text-bold text-suedeboots">Date: </a>
					Saturday Novemver 30<sup>th</sup> at 2:00pm
				</p>
				<p><a className="text-bold text-suedeboots">Location: </a>
					<a href="https://maps.app.goo.gl/gHiegt7BCNWUvGBa9" className="underline decoration-sky-700" target="_blank" rel="noopener noreferrer">
						1 Chome-8-25 Asuwa, Fukui, 918-8007
					</a>
				</p>
				<div>
					<p className="text-suedeboots">Program:</p>
					<br/>
					<div className="grid grid-cols-2">
						<p>6:00 to 6:15pm</p>
						<p>Arrival of Guests</p>
					</div>
				</div>
				<p>
					<a className="text-bold text-suedeboots">Attire</a>
					<br/>
					Western attire. Optional Cocktail Sarees for women
				</p>
				<div>
					<Link href="/wedding/rsvp"
						className="py-4 items-center rounded-lg bg-suedeboots px-4 text-md font-medium text-white transition-colors hover:bg-harvestmoon mb-4"
					>Link to RSVP</Link>
				</div>
			</div>
			<div className="col-span-2 text-2xl overflow-y-auto text-center mt-6">
				<p className="text-4xl ">Reception - A Grand Celebration of Matrimonial Union</p>
				<br/>
				<p className="indent-8">
					The wedding reception is the highlight of Indian weddings, held in the evening of the wedding day. This grand event marks the culmination of the wedding festivities, bringing together family, friends, and acquaintances from both sides to celebrate the newlywed couple. Set in a lavish venue adorned with beautiful decorations, the reception creates an elegant and festive ambiance.
				</p>
				<br/>
				<p className="indent-8">
					The bride and groom don their finest attire, with the bride often wearing a stunning saree or lehenga and the groom in a sherwani or suit. The evening begins with a warm welcome and greetings, followed by performances. Guests offer their congratulations and blessings to the couple, enjoying a sumptuous feast. The reception is also a time for speeches, toasts, and numerous photo sessions, capturing the joyous memories of the day.
				</p>
				<br/>
				<p className="indent-8">
					Beyond the festivities, the reception holds deep significance. It celebrates the union of the couple, introduces them to the extended community, and serves as an expression of joy and togetherness.
				</p>
				<br/>
				<p className="indent-8">
					Join us in celebrating this grand occasion, as we come together to honor the love and union of the newlyweds!
				</p>
			</div>
		</div>
	)
	// return (
	// 	<div className="flex flex-col items-center justify-center text-2xl border rounded-lg border-8 border-darksakura">
	// 		<h1 className="">SHINZENSHIKI & HIROEN (Reception)</h1>
	// 		<h1 className="text-pretty">Date: November 30<sup>th</sup>, 2024 in Fukui Prefecture.</h1>
	// 		<article className="text-pretty">We appreciation your patience as we work out accomodation details and schedule for the ceremonies.</article>
	// 	</div>
	// )
}

export function HiroenEventBlock () {
	return (
		<div className={"grid grid-cols-2 grid-rows-2 gap-4"}>
			<div className="hidden items-center justify-center h-full sm:flex">
				<Image
					src="/events/hiroen.png"
					width={700}
					height={700}
					className="styles.imagehidden sm:flex"
					alt="Illustration of each wedding event."
				/>
			</div>
			<div className="space-y-10 p-8 sm:px-20 text-2xl">
				<h2 className="text-4xl ">HIROEN (Reception)</h2>
				<p>
					<a className="text-bold text-suedeboots">Date: </a>
					Saturday Novemver 30<sup>th</sup> at 4:30pm
				</p>
				<p><a className="text-bold text-suedeboots">Location: </a>
					<a href="https://maps.app.goo.gl/gHiegt7BCNWUvGBa9" className="underline decoration-sky-700" target="_blank" rel="noopener noreferrer">
						1 Chome-8-25 Asuwa, Fukui, 918-8007
					</a>
				</p>
				<div>
					<p className="text-suedeboots">Program:</p>
					<br/>
					<div className="grid grid-cols-2">
						<p>4:30pm</p>
						<p>Opening Movie</p>
						<p></p>
						<p>Entrance of Bride and Groom</p>
						<p></p>
						<p>Opening address</p>
						<p></p>
						<p>Opening the lid of a sake barrel</p>
						<p></p>
						<p>Welcome Speech & Cheers</p>
						<p>5:00pm</p>
						<p>Photo Shoot</p>
						<p></p>
						<p>Temporarily leaving of Bride</p>
						<p></p>
						<p>Temporarily leaving of Groom</p>
						<p>5:30pm</p>
						<p>Dessert buffet starts</p>
						<p>6:00pm</p>
						<p>Bride and Groom Re-entry</p>
						<p></p>
						<p>Thank you performance</p>
						<p></p>
						<p>Photo Shoot</p>
						<p></p>
						<p>Biography DVD</p>
						<p>6:30pm</p>
						<p>Letter from Bride and Groom</p>
						<p></p>
						<p>Wedding Souvenirs for Parents</p>
						<p></p>
						<p>Groom&apos;s Acknowledgement</p>
						<p></p>
						<p>Leaving of Bride and Groom</p>

					</div>
				</div>
				<p>
					<a className="text-bold text-suedeboots">Attire</a>
					<br/>
					Kimono. Western attire. Optional Cocktail Sarees for women
				</p>
				<div>
					<Link href="/wedding/rsvp"
						className="py-4 items-center rounded-lg bg-suedeboots px-4 text-md font-medium text-white transition-colors hover:bg-harvestmoon mb-4"
					>Link to RSVP</Link>
				</div>
			</div>
			<div className="col-span-2 text-2xl overflow-y-auto text-center mt-6">
				<p className="text-4xl ">Hiroen - Unveiling the newly married couple to their family and friends</p>
				<br/>
				<p className="indent-8">
					A “Hiroen” is a special party to which the bride and groom invite those who have taken care of them and show off their happy married life. It is a wonderful opportunity for the bride and groom to express their heartfelt gratitude by entertaining guests with carefully selected Japanese cuisine, sake, and heartwarming performances.
				</p>
				<br/>
				<p className="indent-8">
				It is also a time for parents and friends to watch over the bride and groom and wish them a wonderful relationship in the future. The bride and groom, together with their closest friends and family, will spend an irreplaceable time laughing, sharing joy, and celebrating their new beginnings, thereby solidifying the bond between them.
				</p>
			</div>
		</div>
	)
	// return (
	// 	<div className="flex flex-col items-center justify-center text-2xl border rounded-lg border-8 border-darksakura">
	// 		<h1 className="">SHINZENSHIKI & HIROEN (Reception)</h1>
	// 		<h1 className="text-pretty">Date: November 30<sup>th</sup>, 2024 in Fukui Prefecture.</h1>
	// 		<article className="text-pretty">We appreciation your patience as we work out accomodation details and schedule for the ceremonies.</article>
	// 	</div>
	// )
}

export function MehendiEventBlockSm() {
	return (
		<div className={""}>
			<h2 className="flex text-2xl justify-center">MEHENDI</h2>
			<div className="flex items-center justify-center h-full">
				<Image
					src="/events/mehendi.png"
					width={150}
					height={150}
					className="styles.image"
					alt="Illustration of each wedding event."
				/>
			</div>
			<div className="justify-self-center space-y-2 py-3 text-sm">
				<p className="text-sm">
					<a className="text-bold text-darksage">Date: </a>
					Wednesday, August 28<sup>th</sup> at 6:00pm
				</p>
				<p>
					<a className="text-bold text-darksage">Location: </a> 
					<a href="https://maps.app.goo.gl/dgZsd2o6BUWKvmy5A" className="underline decoration-sky-700" target="_blank" rel="noopener noreferrer">
						712 Kaiser Court, Naperville, IL 60565
					</a>
				</p>
				<div>
					<p className="text-darksage">Program:</p>
					<div className="grid grid-cols-2">
						<p>6:00 to 6:30pm</p>
						<p>Arrival of Guests</p>
						<p>6:00 to 8:00pm</p>
						<p>Mehendi for Bride & Groom</p>
						<p>7:00 to 10:00pm</p>
						<p>Mehendi for Bridal Party & Family</p>
						<p>7:00 to 8:30pm</p>
						<p>Dinner & Drinks</p>
						<p>8:30 to 10:00pm</p>
						<p>Music & Dance</p>
					</div>
				</div>
				<p> 
					<a className="text-bold text-darksage">Attire</a>
					<br/>
					Traditional Indian attire in shades of green
				</p>
			</div>
			<div className="text-sm overflow-y-auto text-center">
				<h2 className="text-xl">Mehendi - Intricate Henna Ritual For the Bride</h2>
				<br/>
				<p className="indent-2">
					The Mehendi ceremony is one of the most cherished and vibrant pre-wedding events in Indian weddings, celebrated with great enthusiasm and joy. Traditionally held a few days before the main ceremony, this occasion involves the intricate application of henna paste to the bride&apos;s hands and feet, creating beautiful, elaborate designs. Skilled Mehendi artists weave patterns that often include the groom&apos;s name or initials, symbolizing the union of the couple.
				</p>
				<br/>
				<p className="indent-2">
					The ceremony is more than just about applying Mehendi; it is a festive gathering filled with music, singing, and dancing. The venue is adorned with flowers, colorful fabrics, and lights, creating a lively and inviting atmosphere. The bride, dressed in vibrant traditional attire, along with her friends and family, participates in the celebrations, sharing laughter and joy.
				</p>
				<br/>
				<p className="indent-2">Beyond its artistic beauty, Mehendi holds deep cultural and emotional significance. It is believed to bring good luck and positive spirits to the bride and groom. The color and longevity of the Mehendi stain symbolize the strength of the marriage, with darker Mehendi representing deeper love and affection. This ritual also serves as a time for bonding and creating lasting memories, as the bride and her loved ones come together to celebrate her journey into marriage.
				</p>
				<br/>
				<p className="indent-2">Join us in celebrating this beautiful tradition, where art, culture, and joy come together to mark the beginning of a new chapter in the bride&apos;s life.
				</p>
			</div>
			<div>
				<Link href="/wedding/rsvp"
					className="flex mt-3 text-center justify-center items-center rounded-lg bg-darksage px-4 text-md text-white transition-colors hover:bg-sage mb-4"
				>Link to RSVP</Link>
			</div>
		</div>
	)
}

export function HaldiEventBlockSm() {
	return (
		<div className={""}>
			<h2 className="flex text-2xl justify-center">HALDI</h2>
			<div className="flex items-center justify-center h-full">
				<Image
					src="/events/haldi.png"
					width={150}
					height={150}
					className="styles.image"
					alt="Illustration of each wedding event."
				/>
			</div>
			<div className="justify-self-center space-y-2 py-3 text-sm">
					<p className="text-sm">
						<a className="text-amber-500">Date: </a> 
						Thursday, August 29<sup>th</sup> at 10:00am
					</p>
					<p>
						<a className="text-amber-500">Location: </a> 
						<a href="https://maps.app.goo.gl/dgZsd2o6BUWKvmy5A" className="underline decoration-sky-700" target="_blank" rel="noopener noreferrer">
							712 Kaiser Court, Naperville, IL 60565
						</a>
					</p>
				<div>
					<p className="text-amber-500">Program:</p>
					<div className="grid grid-cols-2">
						<p>10:00 to 10:30am</p>
						<p>Arrival of Guests</p>
						<p>10:00 to 11:00am</p>
						<p>Light Snacks & Beverages</p>
						<p>11:00 to 11:45am</p>
						<p>Haldi Ceremony</p>
						<p>11:45 to 01:00pm</p>
						<p>Music & Dance</p>
						<p>1:00 to 2:30pm</p>
						<p>Lunch</p>
					</div>
				</div>
				<p>
					<a className="text-bold text-amber-500">Attire</a>
					<br/>
					Traditional Indian attire in shades of yellow & white combination
				</p>
			</div>
			<div className="text-sm overflow-y-auto text-center">
				<h2 className="text-xl">Haldi - An Intimate Ritual to Bless the Bethrothed Couple</h2>
				<br />
				<p className="indent-2">
					The Haldi ceremony is a cherished pre-wedding tradition in Indian weddings, celebrated with enthusiasm and joy. Typically held a day or two before the wedding, this ritual involves the application of a turmeric paste to the bride and groom&apos;s face, neck, hands, and feet by their close family members and friends. The paste, made from turmeric, sandalwood, and rose water, symbolizes purification and protection.
				</p>
				<br/>
				<p className="indent-2">
					The ceremony area is adorned with vibrant decorations, including marigold flowers and colorful fabrics, creating an auspicious and festive atmosphere. Participants, often dressed in simple, traditional clothes in shades of yellow, join in singing, music, and sometimes dancing, adding to the joyful ambiance.
				</p>
				<br/>
				<p className="indent-2">
					The Haldi ceremony holds deep cultural and emotional significance. Turmeric, known for its antiseptic and beautifying properties, purifies and protects the couple, bringing good luck and blessings. This ritual marks the start of the wedding festivities, symbolizing the couple&apos;s readiness for their sacred union. It also serves as a time for bonding and celebration, filled with laughter and joyous moments.
				</p>
				<br/>
				<p className="indent-2">
					Join us in celebrating this beautiful and meaningful pre-wedding ritual as we prepare for the wedding day with love and blessings!
				</p>
			</div>
			<div>
				<Link href="/wedding/rsvp"
					className="flex mt-3 text-center justify-center items-center rounded-lg bg-amber-500 px-4 text-md text-white transition-colors hover:bg-sage mb-4"
				>Link to RSVP</Link>
			</div>
		</div>
	)
}

export function SangeetEventBlockSm() {
	return (
		<div className={""}>
			<h2 className="flex text-2xl justify-center">SANGEET</h2>
			<div className="flex items-center justify-center h-full">
				<Image
					src="/events/sangeet.png"
					width={200}
					height={200}
					className="styles.imagehidden sm:flex"
					alt="Illustration of each wedding event."
				/>
			</div>
			<div className="justify-self-center space-y-2 py-3 text-sm">
				<p>
					<a className="text-blue-600">Date: </a>
					Friday, August 30<sup>th</sup> at 6:00pm
				</p>
				<p>
					<a className="text-blue-600">Location: </a>  
					<a href="https://maps.app.goo.gl/eo6NaDUrbh9yn2i39" className="underline decoration-sky-700" target="_blank" rel="noopener noreferrer">
						Apollo Room, The Matrix Club 808 S Route 59, Naperville IL 60540
					</a>
				</p>
				<div>
					<p className="text-blue-600">Program:</p>
					<div className="grid grid-cols-2">
						<p>6:00 to 10:00pm</p>
						<p>Open Bar</p>
						<p>6:00 to 6:30pm</p>
						<p>Arrival of Guests</p>
						<p>6:30 to 7:15pm</p>
						<p>Performances</p>
						<p>7:15 to 8:15pm</p>
						<p>Dinner</p>
						<p>7:30 to 10:00pm</p>
						<p>Mehendi (for interested guests)</p>
						<p>8:15 to 10:00pm</p>
						<p>Music & Dance</p>
					</div>
				</div>
				<p>
					<a className="text-bold text-blue-600">Attire</a>
					<br/>
					Traditional Indian attire in bright colors recommended
				</p>
			</div>
			<div className="text-sm overflow-y-auto text-center">
				<h2 className="text-xl">Sangeet - A Joyous Pre-Wedding Celebration</h2>
				<br/>
				<p className="indent-2">
					The Sangeet is one of the most vibrant and anticipated events in Indian weddings, celebrated with unparalleled enthusiasm and joy. Held a few days before the wedding, this festive occasion brings together family and friends for an evening of music, dance, and merriment. The heart of the Sangeet lies in its lively dance performances and melodious singing sessions, where choreographed dances to Bollywood songs and traditional folk songs fill the air. With stunning decorations and guests dressed in colorful, traditional attire, the Sangeet creates a festive and inviting ambiance.
				</p>
				<br/>
				<p className="indent-2">
					Beyond the fun and entertainment, the Sangeet holds significant cultural and emotional value. It symbolizes the joyous union of two families, providing a platform for bonding and celebration. Rooted in Indian traditions, the Sangeet showcases regional customs and stories, setting a joyful tone for the wedding festivities. It is a celebration of love, culture, and community, making it an integral and unforgettable part of the wedding celebrations.
				</p>
				<br/>
				<p className="indent-2">
					Join us as we dance, sing, and celebrate this joyous event!
				</p>
			</div>
			<div>
				<Link href="/wedding/rsvp"
					className="flex mt-3 text-center justify-center items-center rounded-lg bg-blue-600 px-4 text-md text-white transition-colors hover:bg-sage mb-4"
				>Link to RSVP</Link>
			</div>
		</div>
	)
}

export function MuhurthamEventBlockSm() {
	return (
		<div className={""}>
			<h2 className="flex text-2xl justify-center">MUHURTHAM</h2>
			<div className="items-center justify-center h-full flex">
				<Image
					src="/events/muhurtham.png"
					width={200}
					height={200}
					className="styles.imagehidden"
					alt="Illustration of each wedding event."
				/>
			</div>
			<div className="justify-self-center space-y-2 py-3 text-sm">
				<p>
					<a className="text-darkmaroon">Date: </a>
					Saturday, August 31<sup>st</sup> at 10:45am
				</p>
				<p>
					<a className="text-darkmaroon">Location: </a>
					<a href="https://maps.app.goo.gl/s396XvHBXeNMwJFX6" className="underline decoration-sky-700" target="_blank" rel="noopener noreferrer">
						The Crawford, 119 Shuman Blvd, Naperville IL 60563
					</a>
				</p>
				<div>
					<p className="text-darkmaroon">Program:</p>
					<div className="grid grid-cols-2">
						<p>10:45 to 11:00am</p>
						<p>Arrival of Guests</p>
						<p>11:00 to 11:30am</p>
						<p>Light Snacks & Beverages</p>
						<p>11:30 to 12:00pm</p>
						<p>Baraat</p>
						<p>12:00 to 1:30pm</p>
						<p>Lagnam</p>
						<p>1:30 to 2:30pm</p>
						<p>Lunch</p>
						<p>2:30 to 3:30pm</p>
						<p>Photo Shoot</p>
					</div>
				</div>
				<p>
					<a className="text-bold text-darkmaroon">Attire</a>
					<br/>
					Traditional Indian attire is recommended
				</p>
			</div>
			<div className="text-sm overflow-y-auto text-center">
				<h2 className="text-xl">Muhurtham - The Auspicious Moment in South Indian Weddings</h2>
				<br/>
				<p className="indent-2">
					Muhurtham is a pivotal aspect of South Indian weddings, representing the most auspicious time chosen for the wedding ceremony. This sacred moment is meticulously selected by consulting astrologers who study the horoscopes of the bride and groom. Considering various astrological factors and planetary positions, they determine the ideal time to conduct the wedding rituals.
				</p>
				<br/>
				<p className="indent-2">
					The main wedding rituals, including Baraat, Varapuja, Kanyadanam, Mangalsutra, Varamala, and guests blessing the couple are performed during this time to align with positive cosmic influences. This practice is believed to ensure prosperity, happiness, and harmony in the couple&apos;s married life.
				</p>
				<br/>
				<p className="indent-2">
					Observing Muhurtham holds deep spiritual and cultural significance. It is thought to bring divine blessings, providing spiritual protection and grace to the couple. This tradition reflects the South Indian emphasis on timing and auspiciousness in major life events. Starting the wedding ceremony at the Muhurtham sets a positive tone for the marriage, fostering a foundation of love, trust, and mutual respect. By adhering to this practice, the couple honors cultural and family traditions, gaining the approval and blessings of their community and elders.
				</p>
				<br/>
				<p className="indent-2">
					Join us as we celebrate this sacred tradition, marking the beginning of a beautiful journey together.
				</p>
				<br/>
				<p className="indent-2">
					Please also read the various steps involved in our traditional south Indian wedding ceremony (muhurtham) with the description & significance of each step.
				</p>
			</div>
			<div>
				<Link href="/wedding/rsvp"
					className="flex mt-3 text-center justify-center items-center rounded-lg bg-darkmaroon px-4 text-md text-white transition-colors hover:bg-sage mb-4"
				>Link to RSVP</Link>
			</div>
		</div>
	)
}

export function ReceptionEventBlockSm() {
	return (
		<div className={""}>
			<h2 className="flex text-2xl justify-center">RECEPTION</h2>
			<div className="items-center justify-center h-full flex">
				<Image
					src="/events/reception.png"
					width={200}
					height={200}
					className="styles.imagehidden"
					alt="Illustration of each wedding event."
				/>
			</div>
			<div className="justify-self-center space-y-2 py-3 text-sm">
				<p>
					<a className="text-bold text-suedeboots">Date: </a>
					Saturday August 31<sup>st</sup> at 6:00pm
				</p>
				<p><a className="text-bold text-suedeboots">Location: </a>
					<a href="https://maps.app.goo.gl/s396XvHBXeNMwJFX6" className="underline decoration-sky-700" target="_blank" rel="noopener noreferrer">
						The Crawford, 119 Shuman Blvd, Naperville IL 60563
					</a>
				</p>
				<div>
					<p className="text-suedeboots">Program:</p>
					<br/>
					<div className="grid grid-cols-2">
						<p>6:00 to 6:15pm</p>
						<p>Arrival of Guests</p>
						<p>6:15 to 7:15pm</p>
						<p>Cocktails</p>
						<p>7:15 to 8:00pm</p>
						<p>Reception</p>
						<p>8:00 to 9:00pm</p>
						<p>Dinner</p>
						<p>9:00 to 10:00pm</p>
						<p>Photo Shoot</p>
						<p>10:00 to 12:00pm</p>
						<p>Music & Dance</p>
					</div>
				</div>
				<p>
					<a className="text-bold text-suedeboots">Attire</a>
					<br/>
					Western attire. Optional Cocktail Sarees for women
				</p>
			</div>
			<div className="text-sm overflow-y-auto text-center">
				<p className="text-xl">Reception - A Grand Celebration of Matrimonial Union</p>
				<br/>
				<p className="indent-2">
					The wedding reception is the highlight of Indian weddings, held in the evening of the wedding day. This grand event marks the culmination of the wedding festivities, bringing together family, friends, and acquaintances from both sides to celebrate the newlywed couple. Set in a lavish venue adorned with beautiful decorations, the reception creates an elegant and festive ambiance.
				</p>
				<br/>
				<p className="indent-2">
					The bride and groom don their finest attire, with the bride often wearing a stunning saree or lehenga and the groom in a sherwani or suit. The evening begins with a warm welcome and greetings, followed by performances. Guests offer their congratulations and blessings to the couple, enjoying a sumptuous feast. The reception is also a time for speeches, toasts, and numerous photo sessions, capturing the joyous memories of the day.
				</p>
				<br/>
				<p className="indent-2">
					Beyond the festivities, the reception holds deep significance. It celebrates the union of the couple, introduces them to the extended community, and serves as an expression of joy and togetherness.
				</p>
				<br/>
				<p className="indent-2">
					Join us in celebrating this grand occasion, as we come together to honor the love and union of the newlyweds!
				</p>
			</div>
			<div>
				<Link href="/wedding/rsvp"
					className="flex mt-3 text-center justify-center items-center rounded-lg bg-suedeboots px-4 text-md text-white transition-colors hover:bg-sage mb-4"
				>Link to RSVP</Link>
			</div>
		</div>
	)
}

export function ShinzensikiEventBlockSm() {
	return (
		<div className="border rounded-lg border-8 border-darksakura">
			<div className="flex justify-center text-center">
				<h1 className="">SHINZENSHIKI & HIROEN (Reception)</h1>
			</div>
			<p className="text-pretty text-sm">Date: November 30<sup>th</sup>, 2024 in Fukui Prefecture.</p>
			<article className="text-pretty text-sm">We appreciation your patience as we work out accomodation details and schedule for the ceremonies.</article>
		</div>
	)
}
