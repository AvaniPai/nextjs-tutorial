import { InvitedEvents } from "@/app/lib/definitions";
// import { mehendiDescription, haldiDescription, sangeetDescription, muhurthamDescription, receptionDescription, shinzenshikiDescription, hiroenDescription } from "@/app/lib/event_descriptions";
import { MehendiEventBlock } from "@/app/ui/events/event-block-mehendi";
import Image from 'next/image';
import Text from 'react';
import { HaldiEventBlock } from "./event-block-haldi";
import { SangeetEventBlock } from "./event-block-sangeet";
import { MuhurthamEventBlock } from "./event-block-muhurtham";
import { ReceptionEventBlock } from "./event-block-reception";

export default function EventBlock(){
	return (
		<div className="">
			<MehendiEventBlock />
			<HaldiEventBlock />
			<SangeetEventBlock />
			<MuhurthamEventBlock />
			<ReceptionEventBlock />
		</div>
	
	)
}
// export function MehendiEventBlock() {
// return <div key={event.name} className={`${event.bg_color} grid gap-6 grid-cols-2 h-5/6 md:grid-cols-3 mb-2 md:p-3 md:m-10`}>
			// 		<div className="hidden items-center justify-center h-full bg-gray-100 md:block">
			// 		<Image
			// 			src={event.imgPath}
			// 			width={1000}
			// 			height={1000}
			// 			className="styles.imagehidden md:flex"
			// 			alt="Illustration of each wedding event."
			// 		/>
			// 	</div>
			// 	<div>
			// 		<h2>{event.name}</h2>
			// 		<p>Date: {event.date}</p>
			// 	</div>
			// 	<article className="text-2xl">
			// 		{/* add the text here directly and separate with <br></br>*/}
			// 		<p className="text-balance">Description: {event.description}</p>
			// 	</article>
			// </div>
//}
// export default function EventBlock({ invites }: { invites: InvitedEvents }) {
// 	var event_list = [];

// 	if (invites.mehendi) {
// 		const mehendiEvent = {
// 			name: 'Mehendi',
// 			date: 'August 28th, 2024',
// 			description: mehendiDescription,
// 			imgPath: '/events/green.png',
// 			bg_color: 'bg-green-200'
// 		}
// 		event_list.push(mehendiEvent);
// 	}
// 	if (invites.haldi) {
// 		const haldiEvent = {
// 			name: 'Haldi',
// 			date: 'August 28th, 2024',
// 			description: haldiDescription,
// 			imgPath: '/events/yellow.png',
// 			bg_color: 'bg-yellow-200'
// 		}
// 		event_list.push(haldiEvent);
// 	}
// 	if (invites.sangeet) {
// 		const Event = {
// 			name: 'Sangeet',
// 			date: 'August 30th, 2024',
// 			description: sangeetDescription,
// 			imgPath: '/events/blue.png',
// 			bg_color: 'bg-blue-200'
// 		}
// 		event_list.push(Event);
// 	}
// 	if (invites.muhurtham) {
// 		const Event = {
// 			name: 'Muhurtham',
// 			date: 'August 31st, 2024',
// 			description: muhurthamDescription,
// 			imgPath: '/events/red.png',
// 			bg_color: 'bg-red-200'
// 		}
// 		event_list.push(Event);
// 	}
// 	if (invites.reception) {
// 		const Event = {
// 			name: 'Reception',
// 			date: 'August 31st, 2024',
// 			description: receptionDescription,
// 			imgPath: '/events/catpng.png',
// 			bg_color: 'bg-pink-200'
// 		}
// 		event_list.push(Event);
// 	}
// 	if (invites.shinzenshiki) {
// 		const Event = {
// 			name: 'Shinzenshiki',
// 			date: 'November 30th, 2024',
// 			description: shinzenshikiDescription,
// 			imgPath: '/events/blue.png',
// 			bg_color: 'bg--200'
// 		}
// 		event_list.push(Event);
// 	}
// 	if (invites.hiroen) {
// 		const Event = {
// 			name: 'Hiroen',
// 			date: 'November 30th, 2024',
// 			description: hiroenDescription,
// 			imgPath: '/events/blue.png',
// 			bg_color: 'bg--200'
// 		}
// 		event_list.push(Event);
// 	}
// 	const desc = "I love to eat pie.";
// 	return (
// 		<div className="md-100 py1 h-screen md:py-5 md:h-full">
// 			{event_list.map((event) => (
// 				<div key={event.name} className={`${event.bg_color} grid gap-6 grid-cols-2 h-5/6 md:grid-cols-3 mb-2 md:p-3 md:m-10`}>
// 					<div className="hidden items-center justify-center h-full bg-gray-100 md:block">
// 						<Image
// 							src={event.imgPath}
// 							width={1000}
// 							height={1000}
// 							className="styles.imagehidden md:flex"
// 							alt="Illustration of each wedding event."
// 						/>
// 					</div>
// 					<div>
// 						<h2>{event.name}</h2>
// 						<p>Date: {event.date}</p>
// 					</div>
// 					<article className="text-2xl">
// 						{/* add the text here directly and separate with <br></br>*/}
// 						{/* <p className="text-balance">Description: {event.description}</p> */}
// 					</article>
// 				</div>
// 			// ))}
// 		</div>
// 	)

// }