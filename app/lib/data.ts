import { sql } from '@vercel/postgres';
import { InvitedEvents, RSVPResults } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function getInvitedEvents(userEmail: string) {
  noStore();
  try {
    console.log('Fetching invited events for guest...');
    const data = await sql<InvitedEvents>`
    SELECT guest_id, 
           receptiononly AS reception_only,
           sangeetreceptiononly AS sangeet_reception_only,
           sanmuhrec AS sanmuhrec,
           allevents AS all_events,
           allusjapan AS all_us_japan,
           japanonly AS japan_only
    FROM guests
    WHERE email = ${userEmail};
    `
    // above will return a QueryResult object with type InvitedEvents
    // referencing rows will result in a list of InvitedEvents objects
    console.log("Current User's Email", userEmail);
    console.log("Invited to Japan Events", data.rows[0].japan_only)

    return data.rows[0];
    
  } catch (error) {
    console.log('Database Error:', error);
    throw error;
  }

}

export async function getUserRSVPInfo(userEmail: string){
  noStore();
  try {
    console.log("Fetching user's rsvp status and invitation information.")
    const data = await sql<RSVPResults>`
    SELECT guest_id,
           receptiononly AS reception_only,
           sangeetreceptiononly AS sangeet_reception_only,
           sanmuhrec,
           allevents AS all_events,
           allusjapan AS all_us_japan,
           japanonly AS japan_only,
           hasrsvped,
           isattendingmehendi,
           mehendipartysize,
           isattendinghaldi,
           haldipartysize,
           isattendingsangeet,
           sangeetpartysize,
           isattendingmuhurtham,
           muhurthampartysize,
           isattendingreception,	
           receptionpartysize,
           partymembers,
           isattendingshinzenshiki,
           shinzenshikipartysize,
           isattendinghiroen,
           hiroenpartysize,
           allergies
    FROM guests
    WHERE email = ${userEmail};
    `
    console.log("Current User's Email", userEmail);

    return data.rows[0]
    

  } catch (error) {
    console.log('Database Error: ', error);
    throw error;
  }

}