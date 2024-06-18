import { InvitedEvents } from "@/app/lib/definitions";
// import { mehendiDescription, haldiDescription, sangeetDescription, muhurthamDescription, receptionDescription, shinzenshikiDescription, hiroenDescription } from "@/app/lib/event_descriptions";
import Image from 'next/image';

export default function EventBlock({ invites }: { invites: InvitedEvents}){
	var events = [];
	const mehendi = invites.all_events || invites.all_us_japan;
	const haldi = invites.all_events || invites.all_us_japan;
	const sangeet = invites.sangeet_reception_only || invites.sanmuhrec || invites.all_events || invites.all_us_japan;
	const muhurtham = invites.sanmuhrec || invites.all_events || invites.all_us_japan ;
	const reception = invites.sangeet_reception_only || invites.sanmuhrec || invites.reception_only || invites.all_events || invites.all_us_japan ;

	return (
		<div className="">
			{mehendi && <MehendiEventBlock />}
			{haldi && <HaldiEventBlock />}
			{sangeet && <SangeetEventBlock />}
			{muhurtham && <MuhurthamEventBlock />}
			{reception && <ReceptionEventBlock />}
		</div>
	
	)
}
export function MehendiEventBlock() {
	return (
		<div className={"grid gap-6 grid-cols-2 md:grid-cols-3 mb-2 md:p-3 md:m-10"}>
			<div className="hidden items-center justify-center h-full md:flex">
				<Image
					src="/events/mehendi.png"
					width={800}
					height={800}
					className="styles.image hidden md:flex"
					alt="Illustration of each wedding event."
				/>
			</div>
			<div className="whitespace-pre-wrap justify-self-center space-y-20 text-center border rounded-xl border-8 p-8 md:px-20">
				<div>
					<h2 className="text-4xl">Mehendi</h2>
					<p className="text-xl">A Celebrated Pre-Wedding Ritual </p>
				</div>
				<div className="grid grid-cols-2 text-xl">
					<div className="grid grid-rows-2">
						<p>Date</p>
						<p className="flex items-center justify-center">Location</p>
					</div>
					<div className="grid grid-rows-2">
						<p>Wednesday August 28th at 6:00PM</p>
						<div>
							<p>712 Kaiser Court</p>
							<p>Naperville IL 60565</p>
						</div>
					</div>
				</div>
				<div className="flex justify-center">
					<Image
						src="/events/flower.png"
						width={100}
						height={100}
						className="styles.image hidden md:flex"
						alt="Illustration of each wedding event."
					/>
				</div>
				<div>
					<p className="text-2xl">Program</p>
					<div className="grid grid-cols-2 text-xl">
						<p>6:00 to 6:30pm</p>
						<p>Arrival of guests</p>
						<p>6:00 to 8:00pm</p>
						<p>Mehendi for Bride & Groom</p>
						<p>7:00 to 10:00pm</p>
						<p>Mehendi for Squad & family members</p>
						<p>7:00 to 8:30pm</p>
						<p>Dinner & Drinks</p>
						<p>8:30 to 10:00pm</p>
						<p>Music & Dance</p>
					</div>
				</div>
				<div>
					<p className="text-2xl">Attire</p>
					<div className="text-xl">
						<p>Traditional Indian attire in shades of green</p>
					</div>
				</div>
			</div>
			<div className="text-2xl overflow-y-auto">
				<p className="indent-8 text-center">The Mehendi ceremony is one of the most cherished and vibrant pre-wedding events in Indian weddings, celebrated with great enthusiasm and joy. Traditionally held a few days before the wedding, this occasion involves the intricate application of henna paste to the bride&apos;s hands and feet, creating beautiful, elaborate designs. Skilled Mehendi artists weave patterns that often include the groom&apos;s name or initials, symbolizing the union of the couple.</p><br/>
				<p className="indent-8 text-center">The ceremony is not just about applying Mehendi; it is a festive gathering filled with music, singing, and dancing. The venue is adorned with flowers, colorful fabrics, and lights, creating a lively and inviting atmosphere. The bride, dressed in vibrant traditional attire, along with her friends and family, participates in the celebrations, sharing laughter and joy.</p><br/>
				<p className="indent-8 text-center">Beyond its artistic beauty, Mehendi holds deep cultural and emotional significance. It is believed to bring good luck and positive spirits to the bride and groom. The color and longevity of the Mehendi stain symbolize the strength of the marriage, with darker Mehendi representing deeper love and affection. This ritual also serves as a time for bonding and creating lasting memories, as the bride and her loved ones come together to celebrate her journey into marriage.</p><br/>
				<p className="indent-8 text-center">Join us in celebrating this beautiful tradition, where art, culture, and joy come together to mark the beginning of a new chapter in the bride&apos;s life.</p><br/>
			</div>
		</div>
	)
}

export function HaldiEventBlock() {
	return (
		<div className={"grid gap-6 grid-cols-2 md:grid-cols-3 mb-2 md:p-3 md:m-10"}>
			<div className="hidden items-center justify-center h-full md:flex">
				<Image
					src="/events/haldi.png"
					width={800}
					height={800}
					className="styles.imagehidden md:flex"
					alt="Illustration of each wedding event."
				/>
			</div>
			<div className="whitespace-pre-wrap justify-self-center space-y-20 text-center border rounded-xl border-8 p-8 md:px-20">
				<div>
					<h2 className="text-4xl">Haldi</h2>
					<p className="text-xl">A Sacred and Joyous Pre-Wedding Ritual </p>
				</div>
				<div className="grid grid-cols-2 text-xl">
					<div className="grid grid-rows-2">
						<p>Date</p>
						<p className="flex items-center justify-center">Location</p>
					</div>
					<div className="grid grid-rows-2">
						<p>Thursday August 29<sup>th</sup> at 10:00 AM</p>
						<div>
							<p>712 Kaiser Court</p>
							<p>Naperville IL 60565</p>
						</div>
					</div>
				</div>
				<div className="flex justify-center">
					<Image
						src="/events/flower.png"
						width={100}
						height={100}
						className="styles.image hidden md:flex"
						alt="Illustration of each wedding event."
					/>
				</div>
				<div>
					<p className="text-2xl">Program</p>
					<div className="grid grid-cols-2 text-xl">
						<p>10:00 to 10:30am</p>
						<p>Arrival of guests</p>
						<p>10:00 to 11:00am</p>
						<p>Light snack & beverages</p>
						<p>11:00 to 11:45am</p>
						<p>Haldi ceremony</p>
						<p>11:45 to 01:00pm</p>
						<p>Music & Dance</p>
						<p>1:00 to 2:30pm</p>
						<p>Lunch</p>
					</div>
				</div>
				<div>
					<p className="text-2xl">Attire</p>
					<div className="text-xl">
						<p>Traditional Indian attire in shades of yellow & white combination</p>
					</div>
				</div>
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

export function SangeetEventBlock() {
	return (
		<div className={"grid gap-6 grid-cols-2 md:grid-cols-3 mb-2 md:p-3 md:m-10"}>
			<div className="hidden items-center justify-center h-full md:flex">
				<Image
					src="/events/sangeet.png"
					width={800}
					height={800}
					className="styles.imagehidden md:flex"
					alt="Illustration of each wedding event."
				/>
			</div>
			<div className="whitespace-pre-wrap justify-self-center space-y-20 text-center border rounded-xl border-8 p-8 md:px-20">
				<div>
					<h2 className="text-4xl">Sangeet</h2>
					<p className="text-xl">A Joyous Pre-Wedding Celebration</p>
				</div>
				<div className="grid grid-cols-2 text-xl">
					<div className="grid grid-rows-2">
						<p>Date</p>
						<p className="flex items-center justify-center">Location</p>
					</div>
					<div className="grid grid-rows-2">
						<p>Friday August 30<sup>th</sup> at 6:00PM</p>
						<div>
							<p>Apollo Room, The Matrix Club</p>
							<p>808 S Route 59, Naperville IL 60540</p>
						</div>
					</div>
				</div>
				<div className="flex justify-center">
					<Image
						src="/events/flower.png"
						width={100}
						height={100}
						className="styles.image hidden md:flex"
						alt="Illustration of each wedding event."
					/>
				</div>
				<div>
					<p className="text-2xl">Program</p>
					<div className="grid grid-cols-2 text-xl">
						<p>6:00 to 10:00pm</p>
						<p>Open Bar</p>
						<p>6:00 to 6:30pm</p>
						<p>Arrival of guests</p>
						<p>6:30 to 7:15pm</p>
						<p>Performances</p>
						<p>7:15 to 8:15pm</p>
						<p>Dinner</p>
						<p>7:30 to 10:00pm</p>
						<p>Mehendi for interested guests</p>
						<p>8:15 to 10:00pm</p>
						<p>Music & Dance</p>
					</div>
				</div>
				<div>
					<p className="text-2xl">Attire</p>
					<div className="text-xl">
						<p>Traditional Indian attire in bright colors recommended</p>
					</div>
				</div>
			</div>
			<div className="text-2xl">
				<p>The Sangeet is one of the most vibrant and anticipated events in Indian weddings, celebrated with unparalleled enthusiasm and joy. Held a few days before the wedding, this festive occasion brings together family and friends for an evening of music, dance, and merriment. The heart of the Sangeet lies in its lively dance performances and melodious singing sessions, where choreographed dances to Bollywood songs and traditional folk songs fill the air. With stunning decorations and guests dressed in colorful, traditional attire, the Sangeet creates a festive and inviting ambiance.</p>
				<p>Beyond the fun and entertainment, the Sangeet holds significant cultural and emotional value. It symbolizes the joyous union of two families, providing a platform for bonding and celebration. Rooted in Indian traditions, the Sangeet showcases regional customs and stories, setting a joyful tone for the wedding festivities. It is a celebration of love, culture, and community, making it an integral and unforgettable part of the wedding celebrations.</p>
				<p>Join us as we dance, sing, and celebrate this joyous event!</p>
			</div>
		</div>
	)
}
export function MuhurthamEventBlock() {
	return (
		<div className={"grid gap-6 grid-cols-2 md:grid-cols-3 mb-2 md:p-3 md:m-10"}>
			<div className="hidden items-center justify-center h-full md:flex">
				<Image
					src="/events/muhurtham.png"
					width={800}
					height={800}
					className="styles.imagehidden md:flex"
					alt="Illustration of each wedding event."
				/>
			</div>
			<div className="whitespace-pre-wrap justify-self-center space-y-20 text-center border rounded-xl border-8 p-8 md:px-20">
				<div>
					<h2 className="text-4xl">Muhurtham</h2>
					<p className="text-xl">The Auspicious Moment in South Indian Weddings</p>
				</div>
				<div className="grid grid-cols-2 text-xl">
					<div className="grid grid-rows-2">
						<p>Date</p>
						<p className="flex items-center justify-center">Location</p>
					</div>
					<div className="grid grid-rows-2">
						<p>Saturday August 31<sup>st</sup> at 10:45 AM</p>
						<div>
							<p>The Crawford</p>
							<p>119 Shuman Blvd, Naperville IL 60563</p>
						</div>
					</div>
				</div>
				<div className="flex justify-center">
					<Image
						src="/events/flower.png"
						width={100}
						height={100}
						className="styles.image hidden md:flex"
						alt="Illustration of each wedding event."
					/>
				</div>
				<div>
					<p className="text-2xl">Program</p>
					<div className="grid grid-cols-2 text-xl">
						<p>10:45 to 11:00am</p>
						<p>Arrival of guests</p>
						<p>11:00 to 11:30am</p>
						<p>Light snack & beverages</p>
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
				<div>
					<p className="text-2xl">Attire</p>
					<div className="text-xl">
						<p>Traditional Indian attire in recommended</p>
					</div>
				</div>
			</div>
			<div className="text-2xl">
			{/* Please also read the various steps involved in our traditional south Indian wedding ceremony (muhurtham) with the description & significance of each step." */}
				<p>Muhurtham is a pivotal aspect of South Indian weddings, representing the most auspicious time chosen for the wedding ceremony. This sacred moment is meticulously selected by consulting astrologers who study the horoscopes of the bride and groom. Considering various astrological factors and planetary positions, they determine the ideal time to conduct the wedding rituals.</p>
				<p>The main wedding rituals, including Baraat, Varapuja, Kanyadanam, Mangalsutra, Varamala, and guests blessing the couple are performed during this time to align with positive cosmic influences. This practice is believed to ensure prosperity, happiness, and harmony in the couple&apos;s married life.</p>
				<p>Observing Muhurtham holds deep spiritual and cultural significance. It is thought to bring divine blessings, providing spiritual protection and grace to the couple. This tradition reflects the South Indian emphasis on timing and auspiciousness in major life events. Starting the wedding ceremony at the Muhurtham sets a positive tone for the marriage, fostering a foundation of love, trust, and mutual respect. By adhering to this practice, the couple honors cultural and family traditions, gaining the approval and blessings of their community and elders.</p>
				<p>Join us as we celebrate this sacred tradition, marking the beginning of a beautiful journey together.</p>
				<p>Please also read the various steps involved in our traditional south Indian wedding ceremony (muhurtham) with the description & significance of each step.</p>
			</div>
		</div>
	)
}

export function ReceptionEventBlock() {
	return (
		<div className={"grid gap-6 grid-cols-2 md:grid-cols-3 mb-2 md:p-3 md:m-10"}>
			<div className="hidden items-center justify-center h-full md:flex">
				<Image
					src="/events/reception.png"
					width={800}
					height={800}
					className="styles.imagehidden md:flex"
					alt="Illustration of each wedding event."
				/>
			</div>
			<div className="whitespace-pre-wrap justify-self-center space-y-20 text-center border rounded-xl border-8 p-8 md:px-20">
				<div>
					<h2 className="text-4xl">Wedding Reception</h2>
					<p className="text-xl">A Grand Celebration of Union</p>
				</div>
				<div className="grid grid-cols-2 text-xl">
					<div className="grid grid-rows-2">
						<p>Date</p>
						<p className="flex items-center justify-center">Location</p>
					</div>
					<div className="grid grid-rows-2">
						<p>Saturday August 31<sup>st</sup> at 06:00pm</p>
						<div>
							<p>The Crawford</p>
							<p>119 Shuman Blvd, Naperville IL 60563 </p>
						</div>
					</div>
				</div>
				<div className="flex justify-center">
					<Image
						src="/events/flower.png"
						width={100}
						height={100}
						className="styles.image hidden md:flex"
						alt="Illustration of each wedding event."
					/>
				</div>
				<div>
					<p className="text-2xl">Program</p>
					<div className="grid grid-cols-2 text-xl">
						<p>6:00 to 6:15pm</p>
						<p>Arrival of guests</p>
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
				<div>
					<p className="text-2xl">Attire</p>
					<div className="text-xl">
						<p>Western attire. Optional Cocktail Sarees for women</p>
					</div>
				</div>
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