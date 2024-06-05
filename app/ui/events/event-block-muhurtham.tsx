import { InvitedEvents } from "@/app/lib/definitions";
import { mehendiDescription, haldiDescription, sangeetDescription, muhurthamDescription, receptionDescription, shinzenshikiDescription, hiroenDescription } from "@/app/lib/event_descriptions";
import Image from 'next/image';
import Text from 'react';

export function MuhurthamEventBlock() {
	return (
		<div className={"grid gap-6 grid-cols-2 h-5/6 md:grid-cols-3 mb-2 md:p-3 md:m-10"}>
			<div className="hidden items-center justify-center h-full bg-gray-100 md:block">
				<Image
					src="/events/red.png"
					width={1000}
					height={1000}
					className="styles.imagehidden md:flex"
					alt="Illustration of each wedding event."
				/>
			</div>
			<div>
				<h2>Muhurtham</h2>
				<p>August 30th, 2024</p>
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