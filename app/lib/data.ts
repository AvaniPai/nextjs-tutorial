import { sql } from '@vercel/postgres';
import { InvitedEvents } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function getInvitedEvents(userEmail: string) {
  noStore();
  try {
    console.log('Fetching invited events for guest...');
    const data = await sql<InvitedEvents>`
    SELECT guest_id, isinvitedtohaldi AS haldi, isinvitedtomehendi AS mehendi, isinvitedtosangeet AS sangeet, isinvitedtomuhurtham AS muhurtham, isinvitedtoreception AS reception, isinvitedtoshinzenshiki AS shinzenshiki, isinvitedtohiroen AS hiroen
    FROM guest_test
    WHERE email = ${userEmail};
    `
    // above will return a QueryResult object with type InvitedEvents
    // referencing rows will result in a list of InvitedEvents objects
    console.log("Current User's Email", userEmail);

    return data.rows[0];
    
  } catch (error) {
    console.log('Database Error:', error);
    throw error;
  }

}