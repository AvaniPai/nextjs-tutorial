import AnswerSummary from '@/app/ui/rsvp/rsvp-answers-jp';
import { getUserEmail } from '@/app/lib/actions';
import { getUserRSVPInfo } from '@/app/lib/data';

export default async function Page(){
    const currUserEmail  = await getUserEmail();
    const rsvpInfo = await getUserRSVPInfo(currUserEmail);

	return (
		<div>
			<AnswerSummary rsvpResults={rsvpInfo}></AnswerSummary>
			<br/>
			<h2>回答内容は「出席の返事」タブからいつでも確認できます。</h2>
			<h2>回答内容の変更がご希望の方は、再び「出席の返事」に移動して回答して下さい。</h2>
		</div>
	)
}