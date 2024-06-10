import RSVPForm from '@/app/ui/rsvp/rsvp-form';
import { getUserEmail } from '@/app/lib/actions';
import { getInvitedEvents } from '@/app/lib/data';
import Image from 'next/image';
import { birthstonebounce } from '@/app/ui/fonts';

export default async function Page() {
    const currUserEmail  = await getUserEmail();
    const invitedEvents = await getInvitedEvents(currUserEmail);
     
    return (
        <main>
            <div className={`${birthstonebounce.className} antialiased bg-[url('/sakura_border.png')] bg-contain container flex flex-col justify-evenly p-4 mx-auto max-width`}>
                <h1 className="text-8xl text-center mb-4">We hope you can join us!</h1>
                <h1 className="text-2xl text-center"><br/>Kindly respond by July 6, 2024.</h1>
            </div>
            <div>
            </div>
            <RSVPForm invites={invitedEvents}/>
        </main>
    )
}