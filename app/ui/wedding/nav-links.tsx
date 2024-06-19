'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { 
    name: 'HOME', 
    href: '/wedding', 
  },
  {
    name: 'RSVP',
    href: '/wedding/rsvp',
  },
  {
    name: 'EVENTS', 
    href: '/wedding/events',
  },
  {
    name: 'ACCOMODATIONS', 
    href: '/wedding/accommodations',
  },
  {
    name: 'GIFT REGISTRY', 
    href: '/wedding/gift-registry',
  },
  {
    name: 'TRAVEL TIPS', 
    href: '/wedding/travel-tips',
  }
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex grow items-center justify-center md:gap-2 rounded-md p-1 md:p-3 text-xs md:text-xl xl:text-2xl font-medium h-[40px] hover:bg-emerald-100 hover:text-emerald-600 md:h-[100px] md:flex-none md:p-2 md:px-3',
              {
                'text-emerald-600': pathname === link.href,
              },
        )}
          >
            <p className="block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
