'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { auth, signIn } from '@/auth';
import { AuthError } from 'next-auth';

const RSVPFormSchema = z.object({
  partySize: z.coerce.number().gt(0, { message: 'Please enter a number larger than 0.'}),
  partyNames: z.string().min(1, {
    message: "This field is required.",
  }),
  isAttendingMehendi: z.enum(['yes','no','not_invited'], {
    invalid_type_error: "Please select 'Yes' or 'No'."
  }),
  isAttendingHaldi: z.enum(['yes','no','not_invited'], {
    invalid_type_error: "Please select 'Yes' or 'No'."
  }),
  isAttendingSangeet: z.enum(['yes','no','not_invited'], {
    invalid_type_error: "Please select 'Yes' or 'No'."
  }),
  isAttendingMuhurtham: z.enum(['yes','no','not_invited'], {
    invalid_type_error: "Please select 'Yes' or 'No'."
  }),
  isAttendingReception: z.enum(['yes','no','not_invited'], {
    invalid_type_error: "Please select 'Yes' or 'No'."
  }),
  isAttendingShinzenshiki: z.enum(['yes','no','not_invited'], {
    invalid_type_error: "Please select 'Yes' or 'No'."
  }),
  isAttendingHiroen: z.enum(['yes','no','not_invited'], {
    invalid_type_error: "Please select 'Yes' or 'No'."
  }),
});

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
    partySize?: string[];
    partyNames?: string[];
    isAttendingMehendi?: string[];
    isAttendingHaldi?: string[];
    isAttendingSangeet?: string[];
    isAttendingMuhurtham?: string[];
    isAttendingReception?: string[];
    isAttendingShinzenshiki?: string[];
    isAttendingHiroen?: string[];
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
          partySize: formData.get('party_size'),
          partyNames: formData.get('party_names'),
          isAttendingMehendi: formData.has('mehendi') ? formData.get('mehendi') : "not_invited",
          isAttendingHaldi: formData.has('haldi') ? formData.get('haldi') : "not_invited",
          isAttendingSangeet: formData.has('sangeet') ? formData.get('sangeet') : "not_invited",
          isAttendingMuhurtham: formData.has('muhurtham') ? formData.get('muhurtham') : "not_invited",
          isAttendingReception: formData.has('reception') ? formData.get('reception') : "not_invited",
          isAttendingShinzenshiki: formData.has('shinzenshiki') ? formData.get('shinzenshiki') : "not_invited",
          isAttendingHiroen: formData.has('hiroen') ? formData.get('hiroen') : "not_invited",
  });

  if (!validatedFields.success) {
    console.log('error validating form fields');
    return { errors: validatedFields.error.flatten().fieldErrors,
             message: 'Missing or incorrect fields. Failed to update RSVP status.'
    } 
  }

  const {
          partySize,
          partyNames, 
          isAttendingMehendi, 
          isAttendingHaldi, 
          isAttendingSangeet, 
          isAttendingMuhurtham, 
          isAttendingReception, 
          isAttendingShinzenshiki, 
          isAttendingHiroen 
  } = validatedFields.data;

  const rsvpUpdatedDate = new Date().toISOString().split('T')[0];

  try {
    await sql`
    UPDATE guest_test
    SET isattendingmehendi = ${isAttendingMehendi}, 
        isattendinghaldi =  ${isAttendingHaldi},
        isattendingsangeet = ${isAttendingSangeet},
        isattendingmuhurtham = ${isAttendingMuhurtham},
        isattendingreception = ${isAttendingReception},
        isattendingshinzenshiki = ${isAttendingShinzenshiki},
        isattendinghiroen = ${isAttendingHiroen},
        partysize = ${partySize},
        partymembers = ${partyNames},
        lastrsvpupdatetime = ${rsvpUpdatedDate}
    WHERE guest_id = ${guest_id}
    `;
  } catch (error) {
    console.log('Ruh roh');
    console.log(error);
    return { 
      message: 'There was in issue with submitting your response. Please refresh the page and try again. Thank you.',
    }
  }

  revalidatePath('/wedding/rsvp');
  redirect('/wedding/events');
}