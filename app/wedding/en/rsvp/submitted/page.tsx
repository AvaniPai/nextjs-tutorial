import AnswerSummary from '@/app/ui/rsvp/rsvp-answers';
import { getUserEmail } from '@/app/lib/actions';
import { getUserRSVPInfo } from '@/app/lib/data';

export default async function Page(){
    const currUserEmail  = await getUserEmail();
    const rsvpInfo = await getUserRSVPInfo(currUserEmail);

	return (
		<div>
			<AnswerSummary rsvpResults={rsvpInfo}></AnswerSummary>
			<br/>
			<h2>This summary will now be visible on the RSVP page as well.</h2>
			<h2>Please revist the RSVP page if you wish to resubmit your response.</h2>
		</div>
	)
}