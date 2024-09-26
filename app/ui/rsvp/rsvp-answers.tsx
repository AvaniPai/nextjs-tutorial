'use client';

import { RSVPResults } from "@/app/lib/definitions";

export default function AnswerSummary({ rsvpResults }: { rsvpResults: RSVPResults}){

  	// const mehendi = rsvpResults.all_events || rsvpResults.all_us_japan;
  	// const haldi = rsvpResults.all_events || rsvpResults.all_us_japan;
  	// const sangeet = rsvpResults.all_events || rsvpResults.all_us_japan || rsvpResults.sangeet_reception_only || rsvpResults.sanmuhrec;
  	// const muhurtham = rsvpResults.all_events || rsvpResults.all_us_japan || rsvpResults.sanmuhrec;
  	// const reception = rsvpResults.all_events || rsvpResults.all_us_japan || rsvpResults.reception_only || rsvpResults.sangeet_reception_only || rsvpResults.sanmuhrec;
  	const shinzenshiki = rsvpResults.all_us_japan;
  	const hiroen = rsvpResults.all_us_japan;

	return (
		<div className="container rounded-md border-4 border-amber-700 max-width mx-auto md:p-6 sm:text-lg text:sm">
			<h2>Thank you for submitting your RSVP! Here is a summary of your response.</h2>
			<br></br>
			<div className="sm:border-none border-4 border-amber-700 p-4">
				<div className="grid grid-cols-3 sm:text-lg text-sm">
					<div>
						<p className="text-amber-700 underline">Event</p>
						{/* { mehendi && <p>Mehendi</p>}
						{ haldi && <p>Haldi</p>}
						{ sangeet && <p>Sangeet</p>}
						{ muhurtham && <p>Muhurtham</p>}
						{ reception && <p>Reception</p>} */}
						{ shinzenshiki && <p>Ceremony</p>}
						{ hiroen && <p>Reception</p>}
					</div>
					<div>
						<p className="text-amber-700 underline">RSVP Status</p>
						{/* { mehendi && <p>{rsvpResults.isattendingmehendi}</p>}
						{ haldi && <p>{rsvpResults.isattendinghaldi}</p>}
						{ sangeet && <p>{rsvpResults.isattendingsangeet}</p>}
						{ muhurtham && <p>{rsvpResults.isattendingmuhurtham}</p>}
						{ reception && <p>{rsvpResults.isattendingreception}</p>} */}
						{ shinzenshiki && <p>{rsvpResults.isattendingshinzenshiki}</p>}
						{ hiroen && <p>{rsvpResults.isattendinghiroen}</p>}
					</div>
					<div>
						<p className="text-amber-700 underline">Party Size</p>
						{/* { mehendi && <p>{rsvpResults.mehendipartysize}</p>}
						{ haldi && <p>{rsvpResults.haldipartysize}</p>}
						{ sangeet && <p>{rsvpResults.sangeetpartysize}</p>}
						{ muhurtham && <p>{rsvpResults.muhurthampartysize}</p>}
						{ reception && <p>{rsvpResults.receptionpartysize}</p>} */}
						{ shinzenshiki && <p>{rsvpResults.isattendingshinzenshiki != "yes" ? 0 : rsvpResults.shinzenshikipartysize}</p>}
						{ hiroen && <p>{rsvpResults.isattendinghiroen != "yes" ? 0 : rsvpResults.hiroenpartysize}</p>}
					</div>
				</div>
				<br/>
				<p><a className="text-amber-700">Registered Allergies:</a> {rsvpResults.allergies}</p>
				<br/>
				{rsvpResults.isattendinghiroen == "yes" &&
					<div>
						<p><a className="text-amber-700">Guests registered for the Reception:</a> {rsvpResults.partymembers}</p>
					</div>
				}	
			</div>
			<p className="pt-8 pb-1">If you would like to alter your response, please fill out the form once again and hit &quot;Submit&quot;.</p>
		</div>
	)
}