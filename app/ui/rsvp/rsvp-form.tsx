'use client';

import { InvitedEvents } from '@/app/lib/definitions';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { updateUserRSVP } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

export default function RSVPForm({ invites }: { invites: InvitedEvents }) {
  const initialState = { message: null, errors: {} };
  const updateUserRSVPWithGuestId = updateUserRSVP.bind(null, invites.guest_id);

  const [state, dispatch] = useFormState(updateUserRSVPWithGuestId, initialState);

  // const mehendi = invites.all_events || invites.all_us_japan;
  // const haldi = invites.all_events || invites.all_us_japan;
  // const sangeet = invites.all_events || invites.all_us_japan || invites.sangeet_reception_only || invites.sanmuhrec;
  // const muhurtham = invites.all_events || invites.all_us_japan || invites.sanmuhrec;
  // const reception = invites.all_events || invites.all_us_japan || invites.reception_only || invites.sangeet_reception_only || invites.sanmuhrec;
  const shinzenshiki = invites.all_us_japan;
  const hiroen = invites.all_us_japan;

  return (
    <form action={dispatch}>
      <div className="container rounded-md bg-sakura max-width mx-auto p-4 md:p-6">

        {/* Mehendi */}
        {/* {mehendi &&
          <div className="mb-8 text-sm md:text-xl">
            <fieldset className="mb-2">
              <legend className="mb-2 block">
                Will you and your party attend the Bridal Mehendi on Wednesday, August 28<sup>th</sup> at 6:00pm CST?
              </legend>
              <div className="rounded-md bg-white px-[14px] py-3">
                <div className="flex gap-8">
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
                      className="ml-2 flex cursor-pointer items-center gap-1.5 py-1.5 text-stone-600  "
                    >
                      Regretfully, no
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="mehendi-rsvp-yes"
                      name="mehendi"
                      type="radio"
                      value="yes"
                      className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-rose-600 focus:ring-2"
                    />
                    <label
                      htmlFor="mehendi-rsvp-yes"
                      className="ml-2 flex cursor-pointer items-center gap-1.5 py-1.5 text-stone-600 "
                    >
                      Joyfully, yes
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
            <div className="mb-4">
              <label htmlFor="mehendi_amount" className="mb-2 block ">
                Please enter the number of guests in your party (including yourself), who will be attending the Bridal Mehendi.
              </label>
              <div className="relative mt-2 rounded-md">
                <input
                  id="mehendi_amount"
                  name="mehendi_party_size"
                  type="number"
                  step={1}
                  min={0}
                  placeholder="1"
                  className="peer block w-full rounded-md border-none py-2 outline-2 placeholder:text-stone-500"
                  onWheel={(e) => (e.target as HTMLElement).blur()}
                />
              </div>
              <div id="mehendi-party-size-error" aria-live="polite" aria-atomic="true">
                {state.errors?.mehendiPartySize &&
                  state.errors.mehendiPartySize.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))}
              </div>
            </div>
          </div>
        } */}

        {/* Haldi */}
        {/* {haldi &&
          <div className="mb-8 text-sm md:text-xl">
            <fieldset className="mb-2">
              <legend className="mb-2 block ">
                Will you and your party be attending the Haldi on Thursday, August 29<sup>th</sup> at 10:30am CST?
              </legend>
              <div className="rounded-md bg-white px-[14px] py-3">
                <div className="flex gap-8">
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
                      className="ml-2 flex cursor-pointer items-center gap-1.5py-1.5 text-stone-600  "
                    >
                      Regretfully, no
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="haldi-rsvp-yes"
                      name="haldi"
                      type="radio"
                      value="yes"
                      className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-rose-600 focus:ring-2"
                    />
                    <label
                      htmlFor="haldi-rsvp-yes"
                      className="ml-2 flex cursor-pointer items-center gap-1.5 py-1.5  text-stone-600"
                    >
                      Joyfully, yes
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
            <div className="mb-4">
              <label htmlFor="haldi_amount" className="mb-2 block ">
                Please enter the number of guests in your party (including yourself), who will be attending the Haldi.
              </label>
              <div className="relative mt-2 rounded-md">
                <input
                  id="haldi_amount"
                  name="haldi_party_size"
                  type="number"
                  step={1}
                  min={0}
                  placeholder="1"
                  className="peer block w-full rounded-md border-none py-2 outline-2 placeholder:text-stone-500"
                  onWheel={(e) => (e.target as HTMLElement).blur()}
                />
              </div>
              <div id="haldi-party-size-error" aria-live="polite" aria-atomic="true">
                {state.errors?.haldiPartySize &&
                  state.errors.haldiPartySize.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))}
              </div>
            </div>
          </div>
        } */}

        {/* Sangeet */}
        {/* {sangeet &&
          <div className="mb-8 text-sm md:text-xl">
            <fieldset className="mb-2">
              <legend className="mb-2 block ">
                Will you and your party be attending the Sangeet on Friday, August 30<sup>th</sup> at 6:00pm CST?
              </legend>
              <div className="rounded-md bg-white px-[14px] py-3">
                <div className="flex gap-8">
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
                      className="ml-2 flex cursor-pointer items-center gap-1.5 py-1.5  text-stone-600"
                    >
                      Regretfully, no
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="sangeet-rsvp-yes"
                      name="sangeet"
                      type="radio"
                      value="yes"
                      className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-rose-600 focus:ring-2"
                    />
                    <label
                      htmlFor="sangeet-rsvp-yes"
                      className="ml-2 flex cursor-pointer items-center gap-1.5 py-1.5  text-stone-600"
                    >
                      Joyfully, yes
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
            <div className="mb-4">
              <label htmlFor="sangeet_amount" className="mb-2 block ">
                Please enter the number of guests in your party (including yourself), who will be attending the Sangeet.
              </label>
              <div className="relative mt-2 rounded-md">
                <input
                  id="sangeet_amount"
                  name="sangeet_party_size"
                  type="number"
                  step={1}
                  min={0}
                  placeholder="1"
                  className="peer block w-full rounded-md border-none py-2 outline-2 placeholder:text-stone-500"
                  onWheel={(e) => (e.target as HTMLElement).blur()}
                />
              </div>
              <div id="sangeet-party-size-error" aria-live="polite" aria-atomic="true">
                {state.errors?.sangeetPartySize &&
                  state.errors.sangeetPartySize.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))}
              </div>
            </div>
          </div>
        } */}

        {/* Muhurtham */}
        {/* {muhurtham &&
          <div className="mb-8 text-sm md:text-xl">
            <fieldset className="mb-2">
              <legend className="mb-2 block ">
                Will you and your party be attending the Muhurtham (Hindu wedding ceremony) on Saturday, August 31<sup>st</sup> at 10:45am CST?
              </legend>
              <div className="rounded-md bg-white px-[14px] py-3">
                <div className="flex gap-8">
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
                      className="ml-2 flex cursor-pointer items-center gap-1.5 py-1.5  text-stone-600"
                    >
                      Regretfully, no
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="muhurtham-rsvp-yes"
                      name="muhurtham"
                      type="radio"
                      value="yes"
                      className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-rose-600 focus:ring-2"
                    />
                    <label
                      htmlFor="muhurtham-rsvp-yes"
                      className="ml-2 flex cursor-pointer items-center gap-1.5 py-1.5  text-stone-600"
                    >
                      Joyfully, yes
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
            <div className="mb-4">
              <label htmlFor="muhurtham_amount" className="mb-2 block ">
                Please enter the number of guests in your party (including yourself), who will be attending the Muhurtham.
              </label>
              <div className="relative mt-2 rounded-md">
                <input
                  id="muhurtham_amount"
                  name="muhurtham_party_size"
                  type="number"
                  placeholder="1"
                  step={1}
                  min={0}
                  className="peer block w-full rounded-md border-none py-2 outline-2 placeholder:text-stone-500"
                  onWheel={(e) => (e.target as HTMLElement).blur()}
                />
              </div>
              <div id="muhurtham-party-size-error" aria-live="polite" aria-atomic="true">
                {state.errors?.muhurthamPartySize &&
                  state.errors.muhurthamPartySize.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))}
              </div>
            </div>
          </div>
        } */}

        {/* Reception */}
        {/* {reception &&
          <div className="mb-8 text-sm md:text-xl">
            <fieldset className="mb-2">
              <legend className="mb-2 block ">
                Will you and your party be attending the Reception on Saturday, August 31<sup>st</sup> at 6:00pm CST?
              </legend>
              <div className="rounded-md bg-white px-[14px] py-3">
                <div className="flex gap-8">
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
                      className="ml-2 flex cursor-pointer items-center gap-1.5 py-1.5  text-stone-600"
                    >
                      Regretfully, no
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="reception-rsvp-yes"
                      name="reception"
                      type="radio"
                      value="yes"
                      className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-rose-600 focus:ring-2"
                    />
                    <label
                      htmlFor="reception-rsvp-yes"
                      className="ml-2 flex cursor-pointer items-center gap-1.5 py-1.5  text-stone-600"
                    >
                      Joyfully, yes
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
            <div className="mb-2">
              <label htmlFor="reception_amount" className="mb-2 block ">
                Please enter the number of guests in your party (including yourself), who will be attending the Reception.
              </label>
              <div className="relative mt-2 rounded-md">
                <input
                  id="reception_amount"
                  name="reception_party_size"
                  type="number"
                  placeholder="1"
                  step={1}
                  min={0}
                  className="peer block w-full rounded-md border-none py-2 outline-2 placeholder:text-stone-500"
                  onWheel={(e) => (e.target as HTMLElement).blur()}
                />
              </div>
              <div id="reception-party-size-error" aria-live="polite" aria-atomic="true">
                {state.errors?.receptionPartySize &&
                  state.errors.receptionPartySize.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))}
              </div>
            </div>
            <div >
              <label htmlFor="guest_names" className="mb-2 block ">
                Please fill in the names for each member of your party.
              </label>
              <div className="relative mt-2 rounded-md">
                <input
                  id="guest_names"
                  name="party_names"
                  type="text"
                  placeholder="example: Avani Pai, Shusuke Sugimoto ..."
                  className="peer block w-full rounded-md py-2 outline-2 border-none placeholder:text-stone-500"
                  defaultValue=""
                />
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
          </div>
        } */}

        {/* Shinzenshiki */}
        {shinzenshiki &&
          <div className="mb-8 text-sm md:text-xl">
            <fieldset className="mb-2">
              <legend className="mb-2 block ">
                Will you and your party be attending the Shinzenshiki (Japanese Shinto Wedding) on Saturday, November 30<sup>th</sup> at 2:00pm JST?
              </legend>
              <div className="rounded-md bg-white px-[14px] py-3">
                <div className="flex gap-8">
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
                      className="ml-2 flex cursor-pointer items-center gap-1.5 py-1.5  text-stone-600"
                    >
                      Regretfully, no
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="shinzenshiki-rsvp-yes"
                      name="shinzenshiki"
                      type="radio"
                      value="yes"
                      className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-rose-600 focus:ring-2"
                    />
                    <label
                      htmlFor="shinzenshiki-rsvp-yes"
                      className="ml-2 flex cursor-pointer items-center gap-1.5 py-1.5  text-stone-600"
                    >
                      Joyfully, yes
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
            <div className="mb-4">
              <label htmlFor="shinzenshiki_amount" className="mb-2 block ">
                Please enter the number of guests in your party (including yourself), who will be attending the Shinzenshiki.
              </label>
              <div className="relative mt-2 rounded-md">
                <input
                  id="shinzenshiki_amount"
                  name="shinzenshiki_party_size"
                  type="number"
                  placeholder="1"
                  step={1}
                  min={0}
                  className="peer block w-full rounded-md border-none py-2 outline-2 placeholder:text-stone-500"
                  onWheel={(e) => (e.target as HTMLElement).blur()}
                />
              </div>
              <div id="shinzenshiki-party-size-error" aria-live="polite" aria-atomic="true">
                {state.errors?.shinzenshikiPartySize &&
                  state.errors.shinzenshikiPartySize.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))}
              </div>
            </div>
          </div>
        }

        {/* Hiroen */}
        {hiroen &&
          <div className="mb-6 text-sm md:text-xl">
            <fieldset className="mb-2">
              <legend className="mb-2 block ">
                Will you and your party be attending the Hiroen (Japanese Wedding Reception) on Saturday, November 30<sup>th</sup> at 5:30pm JST?
              </legend>
              <div className="rounded-md bg-white px-[14px] py-3">
                <div className="flex gap-8">
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
                      className="ml-2 flex cursor-pointer items-center gap-1.5 py-1.5  text-stone-600"
                    >
                      Regretfully, no
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="hiroen-rsvp-yes"
                      name="hiroen"
                      type="radio"
                      value="yes"
                      className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-rose-600 focus:ring-2"
                    />
                    <label
                      htmlFor="hiroen-rsvp-yes"
                      className="ml-2 flex cursor-pointer items-center gap-1.5 py-1.5  text-stone-600"
                    >
                      Joyfully, yes
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
            <div className="mb-4">
              <label htmlFor="hiroen_amount" className="mb-2 block ">
                Please enter the number of guests in your party (including yourself), who will be attending the Hiroen.
              </label>
              <div className="relative mt-2 rounded-md">
                <input
                  id="hiroen_amount"
                  name="hiroen_party_size"
                  type="number"
                  step={1}
                  min={0}
                  placeholder="1"
                  className="peer block w-full rounded-md border-none py-2 outline-2 placeholder:text-stone-500"
                  onWheel={(e) => (e.target as HTMLElement).blur()}
                />
              </div>
              <div id="hiroen-party-size-error" aria-live="polite" aria-atomic="true">
                {state.errors?.hiroenPartySize &&
                  state.errors.hiroenPartySize.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))}
              </div>
            </div>
          </div>
        }

        {/* Allergies */}
        <div className="mb-6 text-sm md:text-xl">
          <label htmlFor="allergy_info" className="mb-2 block ">
            If you have any food allergies, please enter them here. Note: We are not asking about food preferences, but about allergies that can put you at harm.<br /> Please refrain from answering this question if you do not have any food allergies.
          </label>
          <div className="relative mt-2 rounded-md">
            <input
              id="allergy_info"
              name="allergies"
              type="text"
              placeholder="example: shellfish, nuts, dairy, eggs ..."
              className="peer block w-full rounded-md border-none py-2 outline-2 placeholder:text-stone-500"
              defaultValue=""
            />
          </div>
          <div id="allergy-errorr" aria-live="polite" aria-atomic="true">
            {state.errors?.allergies &&
              state.errors.allergies.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

      </div>
      <div aria-live="polite" aria-atomic="true">
        {state.message ? (
          <p className="mt-2 text-sm text-red-500">{state.message}</p>
        ) : null}
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/wedding/events"
          className="flex h-10 items-center rounded-lg bg-stone-200 px-4 text-sm  text-stone-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button className="bg-emerald-600 hover:bg-emerald-500" type="submit">Submit RSVP</Button>
      </div>
    </form>
  );
}
