import Link from 'next/link';
import NavLinks from '@/app/ui/wedding/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';
import Image from 'next/image';
import { quicksand } from '../fonts';


export default function SideNav() {
  return (
    <div className={`${quicksand.className} flex h-full w-full flex-row items-center bg-white shadow-md md:px-3 md:py-1`}>
        <div className="justify-center">
          <Link
            className="hidden rounded-md flex-row xl:flex"
            href="/"
          >
            <Image 
              src="/as_logo_white.png"
              width={150}
              height={150}
              className="styles.image"
              alt="Avani and Shusuke Wedding Invitation Logo"
            />
            <div className='flex items-center'>
              <div>
                <h1 className="text-center">Avani & Shusuke</h1>
                <h1 className="text-center">August 2024</h1>
              </div>
            </div>
          </Link>
        </div>
      <div className="flex flex-wrap grow flex-row justify-center space-x-2 py-2 md:space-x-10 md:py-8">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md"></div>
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className="flex-none h-[40px] md:h-[100px] w-full grow items-center justify-center gap-2 rounded-md md:p-3 text-xs md:text-xl xl:text-2xl font-semibold hover:bg-rose-100 hover:text-rose-600 md:flex-none md:justify-start p-3 md:px-3 text-darksakura">
                          {/* flex grow items-center justify-center md:gap-2 rounded-md md:p-3 text-2xl font-medium h-[40px] hover:bg-emerald-100 hover:text-emerald-600 md:h-[100px] md:flex-none md:p-2 md:px-3' */}
            <div className="block">SIGN OUT</div>
          </button>
        </form>
      </div>
    </div>
  );
}
