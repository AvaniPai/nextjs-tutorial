'use client';
export default function AnswerSummary(){

	return (
		<div className="container rounded-md bg-sage max-width mx-auto p-4 md:p-6">
			<h2>Thank you for submitting your RSVP! Here is a summary of your response.</h2>
			<div className="grid grid-cols-4">
				<div>
					<p>Event Name</p>
					<p>Haldi</p>
					<p>Reception</p>
				</div>
				<div>Participation</div>
				<div>Party Size</div>
				<div>(Reception Only) Party Members</div>
			</div>
		</div>
	)
}