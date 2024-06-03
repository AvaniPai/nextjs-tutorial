'use client';

import { InvitedEvents } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { updateUserRSVP } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

//export default function Form({ customers }: { customers: CustomerField[] }) {
export default function RSVPForm({ invites }: { invites: InvitedEvents }) {
  const initialState = { message: null, errors: {} };
  const updateUserRSVPWithGuestId = updateUserRSVP.bind(null, invites.guest_id);

  const [state, dispatch] = useFormState(updateUserRSVPWithGuestId, initialState);


  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Party Size */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Please enter the number of guests in your party (including yourself).
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="amount"
                name="party_size"
                type="number"
                step="0.01"
                placeholder="1"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <UserGroupIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div id="party-size-error" aria-live="polite" aria-atomic="true">
            {state.errors?.partySize &&
              state.errors.partySize.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Party Names */}
        <div className="mb-4">
          <label htmlFor="guest_names" className="mb-2 block text-sm font-medium">
            Please fill in the names for each member of your party.
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="guest_names"
                name="party_names"
                type="text"
                placeholder="example: Avani Pai, Shusuke Sugimoto ..."
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue=""
              />
              <UserGroupIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div id="party-member-error" aria-live="polite" aria-atomic="true">
            {state.errors?.partyNames &&
              state.errors.partyNames.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Mehendi */}
        {invites.mehendi &&
          <fieldset>
            <legend className="mb-2 block text-sm font-medium">
              Will you and your party be attending the Bridal Mehendi on Wednesday, August 28th at 6:00pm?
            </legend>
            <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
              <div className="flex gap-4">
                <div className="flex items-center">
                  <input
                    id="mehendi-rsvp-no"
                    name="mehendi"
                    type="radio"
                    value="no"
                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                    defaultChecked={true}
                  />
                  <label
                    htmlFor="mehendi-rsvp-no"
                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                  >
                    No
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="mehendi-rsvp-yes"
                    name="mehendi"
                    type="radio"
                    value="yes"
                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  />
                  <label
                    htmlFor="mehendi-rsvp-yes"
                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                  >
                    Yes <CheckIcon className="h-4 w-4" />
                  </label>
                </div>
              </div>
            </div>
            <div id="mehendi-error" aria-live="polite" aria-atomic="true">
              {state.errors?.isAttendingMehendi &&
                state.errors.isAttendingMehendi.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </fieldset>
        }

        {/* Haldi */}
        {invites.haldi &&
          <fieldset>
            <legend className="mb-2 block text-sm font-medium">
              Will you and your party be attending the Haldi on Thursday, August 29th at 10:30am?
            </legend>
            <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
              <div className="flex gap-4">
                <div className="flex items-center">
                  <input
                    id="haldi-rsvp-no"
                    name="haldi"
                    type="radio"
                    value="no"
                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                    defaultChecked={true}
                  />
                  <label
                    htmlFor="haldi-rsvp-no"
                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                  >
                    No
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="haldi-rsvp-yes"
                    name="haldi"
                    type="radio"
                    value="yes"
                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  />
                  <label
                    htmlFor="haldi-rsvp-yes"
                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                  >
                    Yes <CheckIcon className="h-4 w-4" />
                  </label>
                </div>
              </div>
            </div>
            <div id="haldi-error" aria-live="polite" aria-atomic="true">
              {state.errors?.isAttendingHaldi &&
                state.errors.isAttendingHaldi.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </fieldset>
        }

        {/* Sangeet */}
        {invites.sangeet &&
          <fieldset>
            <legend className="mb-2 block text-sm font-medium">
              Will you and your party be attending the Sangeet on Friday, August 30th at 6:00pm?
            </legend>
            <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
              <div className="flex gap-4">
                <div className="flex items-center">
                  <input
                    id="sangeet-rsvp-no"
                    name="sangeet"
                    type="radio"
                    value="no"
                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                    defaultChecked={true}
                  />
                  <label
                    htmlFor="sangeet-rsvp-no"
                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                  >
                    No
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="sangeet-rsvp-yes"
                    name="sangeet"
                    type="radio"
                    value="yes"
                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  />
                  <label
                    htmlFor="sangeet-rsvp-yes"
                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                  >
                    Yes <CheckIcon className="h-4 w-4" />
                  </label>
                </div>
              </div>
            </div>
            <div id="sangeet-error" aria-live="polite" aria-atomic="true">
              {state.errors?.isAttendingSangeet &&
                state.errors.isAttendingSangeet.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </fieldset>
        }

        {/* Muhurtham */}
        {invites.muhurtham &&
          <fieldset>
            <legend className="mb-2 block text-sm font-medium">
              Will you and your party be attending the Muhurtham (Hindu wedding ceremony) on Saturday, August 31st at 11:00am?
            </legend>
            <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
              <div className="flex gap-4">
                <div className="flex items-center">
                  <input
                    id="muhurtham-rsvp-no"
                    name="muhurtham"
                    type="radio"
                    value="no"
                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                    defaultChecked={true}
                  />
                  <label
                    htmlFor="muhurtham-rsvp-no"
                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                  >
                    No
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="muhurtham-rsvp-yes"
                    name="muhurtham"
                    type="radio"
                    value="yes"
                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  />
                  <label
                    htmlFor="muhurtham-rsvp-yes"
                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                  >
                    Yes <CheckIcon className="h-4 w-4" />
                  </label>
                </div>
              </div>
            </div>
            <div id="muhurtham-error" aria-live="polite" aria-atomic="true">
              {state.errors?.isAttendingMuhurtham &&
                state.errors.isAttendingMuhurtham.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </fieldset>
        }

        {/* Reception */}
        {invites.reception &&
          <fieldset>
            <legend className="mb-2 block text-sm font-medium">
              Will you and your party be attending the Reception on Saturday, August 31st at 7:30pm?
            </legend>
            <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
              <div className="flex gap-4">
                <div className="flex items-center">
                  <input
                    id="reception-rsvp-no"
                    name="reception"
                    type="radio"
                    value="no"
                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                    defaultChecked={true}
                  />
                  <label
                    htmlFor="reception-rsvp-no"
                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                  >
                    No
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="reception-rsvp-yes"
                    name="reception"
                    type="radio"
                    value="yes"
                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  />
                  <label
                    htmlFor="reception-rsvp-yes"
                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                  >
                    Yes <CheckIcon className="h-4 w-4" />
                  </label>
                </div>
              </div>
            </div>
            <div id="reception-error" aria-live="polite" aria-atomic="true">
              {state.errors?.isAttendingReception &&
                state.errors.isAttendingReception.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </fieldset>
        }

        {/* Shinzenshiki */}
        {invites.shinzenshiki &&
          <fieldset>
            <legend className="mb-2 block text-sm font-medium">
              Will you and your party be attending the Shinzenshiki (Japanese Shinto Wedding) on Saturday, November 30th at 2:00pm?
            </legend>
            <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
              <div className="flex gap-4">
                <div className="flex items-center">
                  <input
                    id="shinzenshiki-rsvp-no"
                    name="shinzenshiki"
                    type="radio"
                    value="no"
                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                    defaultChecked={true}
                  />
                  <label
                    htmlFor="shinzenshiki-rsvp-no"
                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                  >
                    No
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="rsvp-yes"
                    name="shinzenshiki"
                    type="radio"
                    value="yes"
                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  />
                  <label
                    htmlFor="rsvp-yes"
                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                  >
                    Yes <CheckIcon className="h-4 w-4" />
                  </label>
                </div>
              </div>
            </div>
            <div id="shinzenshiki-error" aria-live="polite" aria-atomic="true">
              {state.errors?.isAttendingShinzenshiki &&
                state.errors.isAttendingShinzenshiki.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </fieldset>
        }

        {/* Hiroen */}
        {invites.hiroen &&
          <fieldset>
            <legend className="mb-2 block text-sm font-medium">
              Will you and your party be attending the Hiroen (Japanese Wedding Reception) on Saturday, November 30th at 5:30pm?
            </legend>
            <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
              <div className="flex gap-4">
                <div className="flex items-center">
                  <input
                    id="hiroen-rsvp-no"
                    name="hiroen"
                    type="radio"
                    value="no"
                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                    defaultChecked={true}
                  />
                  <label
                    htmlFor="hiroen-rsvp-no"
                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                  >
                    No
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="hiroen-rsvp-yes"
                    name="hiroen"
                    type="radio"
                    value="yes"
                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  />
                  <label
                    htmlFor="hiroen-rsvp-yes"
                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                  >
                    Yes <CheckIcon className="h-4 w-4" />
                  </label>
                </div>
              </div>
            </div>
            <div id="hiroen-error" aria-live="polite" aria-atomic="true">
              {state.errors?.isAttendingHiroen &&
                state.errors.isAttendingHiroen.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </fieldset>
        }

      </div>
      <div aria-live="polite" aria-atomic="true">
        {state.message ? (
          <p className="mt-2 text-sm text-red-500">{state.message}</p>
        ) : null}
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/wedding/events"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Submit RSVP</Button>
      </div>
    </form>
  );
}
