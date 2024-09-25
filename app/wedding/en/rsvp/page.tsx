import RSVPForm from '@/app/ui/rsvp/rsvp-form';
import AnswerSummary from '@/app/ui/rsvp/rsvp-answers';
import { getUserEmail } from '@/app/lib/actions';
import { getUserRSVPInfo } from '@/app/lib/data';
import { birthstonebounce } from '@/app/ui/fonts';

export default async function Page() {
    const currUserEmail  = await getUserEmail();
    const rsvpInfo = await getUserRSVPInfo(currUserEmail);
     
    return (
        <main>
            <div className="hidden sm:block bg-[url('/momiji_border.png')] bg-contain container flex flex-col justify-evenly p-4 mx-auto max-width">
                <br/>
                <br/>
                <h1 className={` ${birthstonebounce.className} text-red-900 text-7xl text-center mt-8`}>We hope you can join us!</h1>
                <h1 className="text-xl text-center xl:block"><br/>Kindly respond by October 8<sup>th</sup>, 2024</h1>
            </div>
            <div className='block sm:hidden'>
                <div className="bg-[url('/momiji_border.png')] bg-contain">
                    <h1 className={` ${birthstonebounce.className} text-red-900 text-2xl pt-8 text-center`}>We hope you can join us!</h1>
                </div>
                <div>
                    <h1 className="px-4 text-sm text-center xl:block"><br/>Kindly respond by October 8<sup>th</sup>, 2024</h1>
                </div>
                <br/>
                <br/>
            </div>
            {rsvpInfo.hasrsvped && <AnswerSummary rsvpResults={rsvpInfo}></AnswerSummary>}
            <RSVPForm invites={rsvpInfo}/>
        </main>
    )
}
