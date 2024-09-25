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
		<div className="container rounded-md max-width mx-auto md:p-6">
			<h2>回答内容は以下のとおりです。</h2>
			<br></br>
			<div className="sm:border-none border-4 border-orange-300 p-4">
				<div className="grid grid-cols-3 sm:text-lg text-sm">
					<div>
						<p>イベント</p>
						{/* { mehendi && <p>Mehendi</p>}
						{ haldi && <p>Haldi</p>}
						{ sangeet && <p>Sangeet</p>}
						{ muhurtham && <p>Muhurtham</p>}
						{ reception && <p>Reception</p>} */}
						{ shinzenshiki && <p>神前式</p>}
						{ hiroen && <p>披露宴</p>}
					</div>
					<div>
						<p>出席</p>
						{/* { mehendi && <p>{rsvpResults.isattendingmehendi}</p>}
						{ haldi && <p>{rsvpResults.isattendinghaldi}</p>}
						{ sangeet && <p>{rsvpResults.isattendingsangeet}</p>}
						{ muhurtham && <p>{rsvpResults.isattendingmuhurtham}</p>}
						{ reception && <p>{rsvpResults.isattendingreception}</p>} */}
						{ shinzenshiki && <p>{rsvpResults.isattendingshinzenshiki}</p>}
						{ hiroen && <p>{rsvpResults.isattendinghiroen}</p>}
					</div>
					<div>
						<p>パーティサイズ</p>
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
				<p className="sm:text-lg text-sm">アレルギーの有無: {rsvpResults.allergies}</p>
				<br/>
				{rsvpResults.isattendinghiroen == "yes" &&
					<div>
						<p>パーティメンバー: {rsvpResults.partymembers}</p>
					</div>
				}		
			</div>
			<p className="pt-8 pb-1">回答内容を変更したい場合は以下の質問欄をもう一度埋めて &quot;提出&quot;をクリックしてください。</p>
		</div>
	)
}