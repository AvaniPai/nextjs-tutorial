import Form from '@/app/ui/rsvp/rsvp-form';
import { getUserEmail } from '@/app/lib/actions';

export default function Page() {
    //const currUserEmail  = getUserEmail();
    //const invitedEvents = getInvitedEvents(userId/userEmail);
     
    return (
        <main>
            <Form />
        </main>
    )
}