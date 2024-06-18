import Link from 'next/link';
import NavLinks from '@/app/ui/wedding/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';
import Image from 'next/image';
import { quicksand } from '../fonts';


export default function SideNav() {
  return (
    <div className={`${quicksand.className} flex h-full flex-row items-center bg-white shadow-md md:px-3 md:py-4`}>
        <div className="flex justify-center">
        <Link
          className="hidden rounded-md md:block ml10"
          href="/"
        >
          <Image 
            src="/as_logo_white.png"
            width={150}
            height={150}
            className="styles.image"
            alt="Avani and Shusuke Wedding Invitation Logo"
          />
            <h1 className="text-center">Avani & Shusuke</h1>
            <h1 className="text-center">August 2024</h1>
        </Link>
        </div>
      <div className="flex grow flex-row justify-center space-x-2 py-2 md:space-x-10 md:py-8">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md"></div>
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className="flex h-[100px] w-full grow items-center justify-center gap-2 rounded-md p-3 text-2xl font-semibold hover:bg-rose-100 hover:text-rose-600 md:flex-none md:justify-start md:p-2 md:px-3 text-darksakura">
            <div className="hidden md:block">SIGN OUT</div>
          </button>
        </form>
      </div>
    </div>
  );
}
