import Link from 'next/link';
import NavLinks from '@/app/ui/wedding/nav-links';
// import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';
import Image from 'next/image';
import { quicksand } from '../fonts';


export default function SideNav() {
  return (
    <div className={`${quicksand.className} flex h-full flex-row items-center bg-white border-b-8 border-gray-300 md:px-3 md:py-4`}>
        <div className="flex justify-center">
        <Link
          className="hidden rounded-md md:block ml10"
          href="/"
        >
          <Image 
            src="/as_logo_white.png"
            width={150}
            height={150}
            className="styles.image pl-10"
            alt="Avani and Shusuke Wedding Invitation Logo"
          />
          <h1>Avani & Shusuke's Wedding</h1>
          <h2 className="pl-12">August 2024</h2>
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
          <button className="flex h-[100px] w-full grow items-center justify-center gap-2 rounded-md p-3 text-2xl font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
