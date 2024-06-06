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
            <div className="grid grid-cols-2 grid-rows-2">
                <div className="row-span-2">
                    <Image 
                    src={'/avani_and_shusuke/kanazawa_cafe.png'}
                    width={1478}
                    height={1108}
                    className="md:flex size-full"
                    alt='A picture of Avani and Shusuke in 2019, at a cafe in Kanazawa City in Ishikawa Prefecture.'
                    />
                </div>
                <div className={`${birthstonebounce.className}`}>
                    <h1 className="text-6xl text-center">We hope you can join us!</h1>
                </div>
                <div>
                    <h1>Please scroll down to RSVP.</h1>
                </div>
            </div>
            <RSVPForm invites={invitedEvents}/>
        </main>
    )
}