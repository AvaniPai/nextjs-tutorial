'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { auth, signIn } from '@/auth';
import { AuthError } from 'next-auth';

const RSVPFormSchema = z.object({
  isAttendingMehendi: z.enum(['yes', 'no', 'not_invited'], {
    invalid_type_error: "Please select 'Yes' or 'No'."
  }),
  isAttendingHaldi: z.enum(['yes', 'no', 'not_invited'], {
    invalid_type_error: "Please select 'Yes' or 'No'."
  }),
  isAttendingSangeet: z.enum(['yes', 'no', 'not_invited'], {
    invalid_type_error: "Please select 'Yes' or 'No'."
  }),
  isAttendingMuhurtham: z.enum(['yes', 'no', 'not_invited'], {
    invalid_type_error: "Please select 'Yes' or 'No'."
  }),
  isAttendingReception: z.enum(['yes', 'no', 'not_invited'], {
    invalid_type_error: "Please select 'Yes' or 'No'."
  }),
  isAttendingShinzenshiki: z.enum(['yes', 'no', 'not_invited'], {
    invalid_type_error: "Please select 'Yes' or 'No'."
  }),
  isAttendingHiroen: z.enum(['yes', 'no', 'not_invited'], {
    invalid_type_error: "Please select 'Yes' or 'No'."
  }),
  allergies: z.string()
});

const PartySizeFormSchema = z.object({
  mehendiPartySize: z.coerce.number().positive({
    message: "Please provide the number of people attending this event."
  }),
  haldiPartySize: z.coerce.number().positive({ 
    message: "Please provide the number of people attending this event."
  }),
  sangeetPartySize: z.coerce.number().positive({ 
    message: "Please provide the number of people attending this event."
  }),
  muhurthamPartySize: z.coerce.number().positive({ 
    message: "Please provide the number of people attending this event." 
  }),
  receptionPartySize: z.coerce.number().positive({ 
    message: "Please provide the number of people attending this event." 
  }),
  shinzenshikiPartySize: z.coerce.number().positive({ 
    message: "Please provide the number of people attending this event." 
  }),
  hiroenPartySize: z.coerce.number().positive({ 
    message: "Please provide the number of people attending this event." 
  }),
  partyNames: z.string().min(1, {
    message: "This field is required.",
  }),
})

export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

export type RSVPState = {
  errors?: {
    partyNames?: string[];
    isAttendingMehendi?: string[];
    mehendiPartySize?: string[];
    isAttendingHaldi?: string[];
    haldiPartySize?: string[];
    isAttendingSangeet?: string[];
    sangeetPartySize?: string[];
    isAttendingMuhurtham?: string[];
    muhurthamPartySize?: string[];
    isAttendingReception?: string[];
    receptionPartySize?: string[];
    isAttendingShinzenshiki?: string[];
    shinzenshikiPartySize?: string[];
    isAttendingHiroen?: string[];
    hiroenPartySize?: string[];
    allergies?: string[];
  };
  message?: string | null;
};

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function getUserEmail() {
  try {
    const session = await auth();
    const guestEmail = session?.user?.email ?? "";

    // TODO: better to throw an error if an email is null...
    console.log("guestEmail is: " + guestEmail);

    return guestEmail;

  } catch (error) {
    console.log("Couldn't get user email. Error: ", error)
    throw error;
  }
}

export async function updateUserRSVP(guest_id: string, prevState: RSVPState, formData: FormData) {
  const validatedFields = RSVPFormSchema.safeParse({
    isAttendingMehendi: formData.has('mehendi') ? formData.get('mehendi') : "not_invited",
    isAttendingHaldi: formData.has('haldi') ? formData.get('haldi') : "not_invited",
    isAttendingSangeet: formData.has('sangeet') ? formData.get('sangeet') : "not_invited",
    isAttendingMuhurtham: formData.has('muhurtham') ? formData.get('muhurtham') : "not_invited",
    isAttendingReception: formData.has('reception') ? formData.get('reception') : "not_invited",
    isAttendingShinzenshiki: formData.has('shinzenshiki') ? formData.get('shinzenshiki') : "not_invited",
    isAttendingHiroen: formData.has('hiroen') ? formData.get('hiroen') : "not_invited",
    allergies: formData.get('allergies')
  });

  if (!validatedFields.success) {
    console.log('error validating form fields');
    console.log('error: ', validatedFields.error.message)
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing or incorrect fields. Failed to update RSVP status.'
    }
  }

  const {
    isAttendingMehendi,
    isAttendingHaldi,
    isAttendingSangeet,
    isAttendingMuhurtham,
    isAttendingReception,
    isAttendingShinzenshiki,
    isAttendingHiroen,
    allergies
  } = validatedFields.data;

  const validatedPartySize = PartySizeFormSchema.safeParse({
    mehendiPartySize: isAttendingMehendi == "yes" ? formData.get("mehendi_party_size") : 1,
    haldiPartySize: isAttendingHaldi == "yes" ? formData.get("haldi_party_size") : 1,
    sangeetPartySize: isAttendingSangeet == "yes" ? formData.get("sangeet_party_size") : 1,
    muhurthamPartySize: isAttendingMuhurtham == "yes" ? formData.get("muhurtham_party_size") : 1,
    receptionPartySize: isAttendingReception == "yes" ? formData.get("reception_party_size") : 1,
    shinzenshikiPartySize: isAttendingShinzenshiki == "yes" ? formData.get("shinzenshiki_party_size") : 1,
    hiroenPartySize: isAttendingHiroen == "yes" ? formData.get("hiroen_party_size") : 1,
    partyNames: isAttendingReception == "yes" ? formData.get("party_names") : "not attending",
  })

  if (!validatedPartySize.success) {
    console.log('error validating party size fields.');
    console.log('error: ', validatedPartySize.error.message)
    return {
      errors: validatedPartySize.error.flatten().fieldErrors,
      message: 'Missing or incorrect fields. Failed to update RSVP status.'
    }
  }

  const {
    mehendiPartySize,
    haldiPartySize,
    sangeetPartySize,
    muhurthamPartySize,
    receptionPartySize,
    shinzenshikiPartySize,
    hiroenPartySize,
    partyNames
  } = validatedPartySize.data;

  const rsvpUpdatedDate = new Date().toISOString().split('T')[0];
  const finalAllergies = allergies == "" ? "none" : allergies

  try {
    await sql`
    UPDATE guests
    SET isattendingmehendi = ${isAttendingMehendi}, 
        mehendipartysize = ${mehendiPartySize},
        isattendinghaldi =  ${isAttendingHaldi},
        haldipartysize = ${haldiPartySize},
        isattendingsangeet = ${isAttendingSangeet},
        sangeetpartysize = ${sangeetPartySize},
        isattendingmuhurtham = ${isAttendingMuhurtham},
        muhurthampartysize = ${muhurthamPartySize},
        isattendingreception = ${isAttendingReception},
        receptionpartysize = ${receptionPartySize},
        isattendingshinzenshiki = ${isAttendingShinzenshiki},
        shinzenshikipartysize = ${shinzenshikiPartySize},
        isattendinghiroen = ${isAttendingHiroen},
        hiroenpartysize = ${hiroenPartySize},
        partymembers = ${partyNames},
        lastrsvpupdatetime = ${rsvpUpdatedDate},
        allergies = ${finalAllergies}
    WHERE guest_id = ${guest_id}
    `;
  } catch (error) {
    console.log('Ruh roh');
    console.log(error);
    return {
      message: 'There was in issue with submitting your response. Please refresh the page and try again. Thank you.',
    }
  }

  // revalidatePath('/wedding/rsvp');
  redirect('/wedding');
}