import RSVPForm from '@/app/ui/rsvp/rsvp-form';
import { getUserEmail } from '@/app/lib/actions';
import { getInvitedEvents } from '@/app/lib/data';

export default async function Page() {
    const currUserEmail  = await getUserEmail();
    const invitedEvents = await getInvitedEvents(currUserEmail);
     
    return (
        <main>
            <RSVPForm invites={invitedEvents}/>
        </main>
    )
}