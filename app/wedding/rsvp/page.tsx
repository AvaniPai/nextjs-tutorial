import RSVPForm from '@/app/ui/rsvp/rsvp-form';
import AnswerSummary from '@/app/ui/rsvp/rsvp-answers';
import { getUserEmail } from '@/app/lib/actions';
import { getInvitedEvents, getUserRSVPInfo } from '@/app/lib/data';
import Image from 'next/image';
import { birthstonebounce } from '@/app/ui/fonts';

export default async function Page() {
    const currUserEmail  = await getUserEmail();
    const rsvpInfo = await getUserRSVPInfo(currUserEmail);
     
    return (
        <main>
            <div className="bg-[url('/sakura_border.png')] bg-contain container flex flex-col justify-evenly p-4 mx-auto max-width">
                <h1 className={` ${birthstonebounce.className} text-2xl md:text-7xl text-center md:mb-4`}>We hope you can join us!</h1>
                <h1 className="text-xl text-center"><br/>Kindly respond by July 31<sup>st</sup>, 2024</h1>
            </div>
            {rsvpInfo.hasrsvped && <AnswerSummary rsvpResults={rsvpInfo}></AnswerSummary>}
            <RSVPForm invites={rsvpInfo}/>
        </main>
    )
}