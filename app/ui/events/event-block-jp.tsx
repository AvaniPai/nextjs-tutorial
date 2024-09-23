import { InvitedEvents } from "@/app/lib/definitions";
import Image from 'next/image';
import Link from "next/link";

export default function EventBlock({ invites }: { invites: InvitedEvents }) {
	const mehendi = invites.all_events || invites.all_us_japan;
	const haldi = invites.all_events || invites.all_us_japan;
	const sangeet = invites.sangeet_reception_only || invites.sanmuhrec || invites.all_events || invites.all_us_japan;
	const muhurtham = invites.sanmuhrec || invites.all_events || invites.all_us_japan;
	const reception = invites.sangeet_reception_only || invites.sanmuhrec || invites.reception_only || invites.all_events || invites.all_us_japan;
	const shinzenshiki = invites.all_us_japan || invites.japan_only;
	const hiroen = invites.all_us_japan || invites.japan_only;

	return (
		<div className="">
			<div className="hidden xl:block">
				{shinzenshiki && <ShinzensikiEventBlock/>}
				{hiroen && <HiroenEventBlock/>}
			</div>
			<div className="block xl:hidden">
				{shinzenshiki && <JapanPlaceholdersSm/>}
			</div>
		</div>
	)
}

export function ShinzensikiEventBlock () {
	return (
		<div className={"grid grid-cols-2 gap-4 pb-12"}>
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
				<h2 className="text-4xl ">神前式</h2>
				<p>
					<a className="text-bold text-suedeboots">日時: </a>
					11月30日（土）午後2時
				</p>
				<p><a className="text-bold text-suedeboots">場所: </a>
					<a href="https://maps.app.goo.gl/gHiegt7BCNWUvGBa9" className="underline decoration-sky-700" target="_blank" rel="noopener noreferrer">
						足羽神社
					</a>
				</p>
				<div>
					<p className="text-suedeboots">スケジュール:</p>
					<br/>
					<div className="grid grid-cols-2">
						<p>13:00</p>
						<p>両家顔合わせ</p>
						<p>14:00</p>
						<p>挙式</p>
						<p>14:40</p>
						<p>写真撮影開始</p>
					</div>
				</div>
				<p>
					<a className="text-bold text-suedeboots">服装</a>
					<br/>
					洋装、和装
				</p>
				<div>
					<Link href="/wedding/rsvp"
						className="py-4 items-center rounded-lg bg-suedeboots px-4 text-md font-medium text-white transition-colors hover:bg-harvestmoon mb-4"
					>招待状のお返事</Link>
				</div>
			</div>
			<div className="col-span-2 text-2xl overflow-y-auto text-center mt-6">
				<p className="text-4xl ">神前式 - 神様に誓いを立てて夫婦の契りを結ぶ</p>
				<br/>
				<p className="indent-8">
					神道に則った神前式は、八百万の神に二人の結婚を報告し、両家の絆を深めることを目的としています。 新郎新婦は白無垢や紋付などを着用し、斎主の進行に沿って、神様の前で儀式を進めていきます。
				</p>
				<br/>
				<p className="indent-8">
				五世紀後半ごろ、男大迹王（後の継体天皇）が越前でお過ごしの間に越前平野の大治水事業をされますが、まずその初めに朝廷に祀られている大宮地之霊を足羽山に勧請し、諸事の安全を祈願したのが足羽神社の起源とされています。
				</p>
				<br/>
				<p className="indent-8">
				足羽神社は、山の上に位置しており、11月中旬から下旬にかけて周囲の紅葉が見頃を迎えます。足羽山からは福井を一望でき、その由緒の他に美しい風景にも魅力的に感じたため私たちはこの神社で神前式を挙げることに決めました。
				</p>
			</div>
		</div>
	)
}

export function HiroenEventBlock () {
	return (
		<div className={"grid grid-cols-2 gap-4"}>
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
				<h2 className="text-4xl ">披露宴</h2>
				<p>
					<a className="text-bold text-suedeboots">日付: </a>
						11月30日（土）午後4時30分
				</p>
				<p><a className="text-bold text-suedeboots">場所: </a>出雲記念館
					<br/>
					<a href="https://maps.app.goo.gl/2gYt9Jhi6MUZeiFT8" className="underline decoration-sky-700" target="_blank" rel="noopener noreferrer">
						〒918-8026 福井県福井市渕２丁目2001番地	
					</a>
				</p>
				<div>
					<p className="text-suedeboots">スケジュール:</p>
					<br/>
					<div className="grid grid-cols-2">
						<p>16:00</p>
						<p>受付開始</p>
						<p>16:30</p>
						<p>披露宴開始</p>
						<p>16:50</p>
						<p>乾杯とお食事開始</p>
						<p>17:35</p>
						<p>デザートビュッフェ開始</p>
						<p>18:00</p>
						<p>演奏、動画、や手紙など</p>
						<p>19:00</p>
						<p>終了</p>
						<p>20:30</p>
						<p>あわら温泉で二次会 (未決定)</p>
					</div>
				</div>
				<p>
					<a className="text-bold text-suedeboots">Attire</a>
					<br/>
					洋装、和装
				</p>
				<div>
					<Link href="/wedding/rsvp"
						className="py-4 items-center rounded-lg bg-suedeboots px-4 text-md font-medium text-white transition-colors hover:bg-harvestmoon mb-4"
					>招待状のお返事</Link>
				</div>
			</div>
			<div className="col-span-2 text-2xl overflow-y-auto text-center mt-6">
				<p className="text-4xl ">披露宴 - 新たな夫婦の門出</p>
				<br/>
				<p className="indent-8">
					「披露宴」とは、新郎新婦がお世話になった方々をお招きし、幸せな結婚生活をお披露目する特別なパーティー。厳選された日本料理やお酒、心温まる演出でゲストをもてなし、新郎新婦が心からの感謝を伝える場です。
				</p>
				<br/>
				<p className="indent-8">
					また、両親や友人が新郎新婦を見守り、これからの二人の素晴らしい関係を祈る時間でもある。新郎新婦は、親しい友人や家族とともに、笑い、喜びを分かち合い、新たな門出を祝うかけがえのない時間を過ごすことで、ふたりの絆を確かなものにします。
				</p>
			</div>
		</div>
	)
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
						<p>Mehendi for Bridal Party, Family & Guests</p>
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
					<div className="grid grid-cols-2">
						<p>10:30 to 10:45am</p>
						<p>Arrival of Guests</p>
						<p>10:45 to 11:00am</p>
						<p>Light Snacks & Beverages</p>
						<p>11:00 to 11:45am</p>
						<p>Haldi Ceremony</p>
						<p>11:45 to 1:00pm</p>
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
						<p>6:00 to 6:15pm</p>
						<p>Arrival of Guests</p>
						<p>6:00 to 10:00pm</p>
						<p>Open Bar</p>
						<p>6:30 to 7:30pm</p>
						<p>Dinner</p>
						<p>7:30 to 9:30pm</p>
						<p>Mehendi (for interested guests)</p>
						<p>7:30 to 8:15pm</p>
						<p>Performances</p>
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
					<a className="text-bold text-blue-600">Transportation Schedule</a>
					<table className="border-collapse border border-slate-400">
						<tbody>
							<tr>
								<td className="border border-slate-300 px-1">Departure Location</td>
								<td className="border border-slate-300 px-1">Boarding Time</td>
								<td className="border border-slate-300 px-1">Arrival Location</td>
								<td className="border border-slate-300 px-1">Arrival Time</td>
							</tr>
							<tr>
								<td className="border border-slate-300 px-1">Chicago Marriott Naperville</td> 
								<td className="border border-slate-300 px-1">5:25-5:30pm</td>
								<td className="border border-slate-300 px-1">The Matrix Club</td>
								<td className="border border-slate-300 px-1"> 5:45-5:50pm</td>
							</tr>
							<tr>
								<td className="border border-slate-300 px-1">The Matrix Club</td>
								<td className="border border-slate-300 px-1"> 10:00pm</td>
								<td className="border border-slate-300 px-1">Chicago Marriott Naperville</td>
								<td className="border border-slate-300 px-1"> 10:20pm</td>
							</tr>
						</tbody>
					</table>
					<a> There will be a large coach bus, waiting in the parking lot, with a sign saying &quot;Pai-Sugimoto Wedding&quot;.</a>
				</div>
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
						<p>11:45 to 11:15am</p>
						<p>Light Snacks & Beverages</p>
						<p>11:15 to 11:45am</p>
						<p>Baraat</p>
						<p>11:45 to 1:15pm</p>
						<p>Lagnam / Ceremony</p>
						<p>1:15 to 2:15pm</p>
						<p>Lunch</p>
					</div>
				</div>
				<p>
					<a className="text-bold text-darkmaroon">Attire</a>
					<br/>
					Traditional Indian attire is recommended
				</p>
				<div>
					<a className="text-bold text-blue-600">Transportation Schedule</a>
					<table className="border-collapse border border-slate-400">
						<tbody>
							<tr>
								<td className="border border-slate-300 px-1">Departure Location</td>
								<td className="border border-slate-300 px-1">Boarding Time</td>
								<td className="border border-slate-300 px-1">Arrival Location</td>
								<td className="border border-slate-300 px-1">Arrvial Time</td>
							</tr>
							<tr>
								<td className="border border-slate-300 px-1">Chicago Marriott Naperville</td> 
								<td className="border border-slate-300 px-1">10:15-10:25am</td>
								<td className="border border-slate-300 px-1">The Crawford</td>
								<td className="border border-slate-300 px-1">10:30am</td>
							</tr>
							<tr>
								<td className="border border-slate-300 px-1">The Crawford</td>
								<td className="border border-slate-300 px-1">2:30-2:45pm</td>
								<td className="border border-slate-300 px-1">Chicago Marriott Naperville</td>
								<td className="border border-slate-300 px-1">2:50pm</td>
							</tr>
						</tbody>
					</table>
					<a> There will be a large coach bus, waiting in the parking lot, with a sign saying &quot;Pai-Sugimoto Wedding&quot;.</a>
				</div>
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
						<p>6:00 to 7:15pm</p>
						<p>Cocktails</p>
						<p>7:15 to 8:00pm</p>
						<p>Reception</p>
						<p>8:00 to 9:00pm</p>
						<p>Dinner</p>
						<p>9:00 to 12:00am</p>
						<p>Music & Dance</p>
					</div>
				</div>
				<p>
					<a className="text-bold text-suedeboots">Attire</a>
					<br/>
					Western attire. Optional Cocktail Sarees for women
				</p>
				<div>
					<a className="text-bold text-blue-600">Transportation Schedule</a>
					<table className="border-collapse border border-slate-400">
						<tbody>
							<tr>
								<td className="border border-slate-300 px-1">Departure Location</td>
								<td className="border border-slate-300 px-1">Boarding Time</td>
								<td className="border border-slate-300 px-1">Arrival Location</td>
								<td className="border border-slate-300 px-1">Arrival Time</td>
							</tr>
							<tr>
								<td className="border border-slate-300 px-1">Chicago Marriott Naperville</td> 
								<td className="border border-slate-300 px-1">5:30-5:40pm</td>
								<td className="border border-slate-300 px-1">The Crawford</td>
								<td className="border border-slate-300 px-1">5:50pm</td>
							</tr>
							<tr>
								<td className="border border-slate-300 px-1">The Crawford</td>
								<td className="border border-slate-300 px-1">10:15-10:25pm</td>
								<td className="border border-slate-300 px-1">Chicago Marriott Naperville</td>
								<td className="border border-slate-300 px-1">10:30pm</td>
							</tr>
							<tr>
								<td className="border border-slate-300 px-1">The Crawford</td>
								<td className="border border-slate-300 px-1">12:00-12:10am</td>
								<td className="border border-slate-300 px-1">Chicago Marriott Naperville</td>
								<td className="border border-slate-300 px-1">12:20am</td>
							</tr>
						</tbody>
					</table>
					<a className="text-lg"> There will be a large coach bus, waiting in the parking lot, with a sign saying &quot;Pai-Sugimoto Wedding&quot;.</a>
				</div>
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

export function JapanPlaceholdersSm() {
	return (
		<div className="border rounded-lg border-8 border-darksakura">
			<div className="flex justify-center text-center">
				<h1 className="">神前式</h1>
			</div>
			<p className="text-pretty text-sm">Date: November 30<sup>th</sup>, 2024 in Fukui Prefecture.</p>
			<article className="text-pretty text-sm">We appreciation your patience as we work out accomodation details and schedule for the ceremonies.</article>
		</div>
	)
}