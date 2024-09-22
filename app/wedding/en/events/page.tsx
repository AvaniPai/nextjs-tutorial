// import React from 'react';
import Image from 'next/image';
import EventBlock from '@/app/ui/events/event-block';
import { getUserEmail } from '@/app/lib/actions';
import { getInvitedEvents } from '@/app/lib/data';

export default async function Page() {
    const currUserEmail = await getUserEmail();
    const invitedEvents = await getInvitedEvents(currUserEmail);
    // create event list here
    // if (invites.mehendi) {
        // add to event list
    // if (invites.haldi) { etc...

    // make sure to import all events from app/ui/events/event-block
    return (
        <main className="h-full">
            {/* <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Events
            </h1> */}
            
            <EventBlock invites={invitedEvents}/>
        </main>
    );
}