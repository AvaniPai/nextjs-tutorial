'use client';

import { RSVPResults } from "@/app/lib/definitions";

export default function AnswerSummary({ rsvpResults }: { rsvpResults: RSVPResults}){

  	const mehendi = rsvpResults.all_events || rsvpResults.all_us_japan;
  	const haldi = rsvpResults.all_events || rsvpResults.all_us_japan;
  	const sangeet = rsvpResults.all_events || rsvpResults.all_us_japan || rsvpResults.sangeet_reception_only || rsvpResults.sanmuhrec;
  	const muhurtham = rsvpResults.all_events || rsvpResults.all_us_japan || rsvpResults.sanmuhrec;
  	const reception = rsvpResults.all_events || rsvpResults.all_us_japan || rsvpResults.reception_only || rsvpResults.sangeet_reception_only || rsvpResults.sanmuhrec;
  	const shinzenshiki = rsvpResults.all_us_japan;
  	const hiroen = rsvpResults.all_us_japan;

	return (
		<div className="container rounded-md bg-lightsage max-width mx-auto p-4 md:p-6">
			<h2>Thank you for submitting your RSVP! Here is a summary of your response.</h2>
			<br></br>
			<div className="grid grid-cols-3">
				<div>
					<p className="text-lg underline">Event</p>
					{/* { mehendi && <p>Mehendi</p>}
					{ haldi && <p>Haldi</p>}
					{ sangeet && <p>Sangeet</p>}
					{ muhurtham && <p>Muhurtham</p>}
					{ reception && <p>Reception</p>} */}
					{ shinzenshiki && <p>Shinzenshiki (Japanese Ceremony)</p>}
					{ hiroen && <p>Hiroen (Japanese Reception)</p>}
				</div>
				<div>
					<p className="text-lg underline">RSVP Status</p>
					{/* { mehendi && <p>{rsvpResults.isattendingmehendi}</p>}
					{ haldi && <p>{rsvpResults.isattendinghaldi}</p>}
					{ sangeet && <p>{rsvpResults.isattendingsangeet}</p>}
					{ muhurtham && <p>{rsvpResults.isattendingmuhurtham}</p>}
					{ reception && <p>{rsvpResults.isattendingreception}</p>} */}
					{ shinzenshiki && <p>{rsvpResults.isattendingshinzenshiki}</p>}
					{ hiroen && <p>{rsvpResults.isattendinghiroen}</p>}
				</div>
				<div>
					<p className="text-lg underline">Party Size</p>
					{/* { mehendi && <p>{rsvpResults.mehendipartysize}</p>}
					{ haldi && <p>{rsvpResults.haldipartysize}</p>}
					{ sangeet && <p>{rsvpResults.sangeetpartysize}</p>}
					{ muhurtham && <p>{rsvpResults.muhurthampartysize}</p>}
					{ reception && <p>{rsvpResults.receptionpartysize}</p>} */}
					{ shinzenshiki && <p>{rsvpResults.shinzenshikipartysize}</p>}
					{ hiroen && <p>{rsvpResults.hiroenpartysize}</p>}
				</div>
			</div>
			<br/>
			<p>Registered Allergies: {rsvpResults.allergies}</p>
			<br/>
			{rsvpResults.isattendingreception == "yes" &&
				<div>
					<p>Guests registered for the Reception: {rsvpResults.partymembers}</p>
				</div>
			}
			<p>If you would like to alter your response, please fill out the form once again and hit &quot;Submit&quot;.</p>
		</div>
	)
}