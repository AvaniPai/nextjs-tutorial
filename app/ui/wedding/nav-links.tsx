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
    name: 'Home', 
    href: '/wedding', 
  },
  {
    name: 'RSVP',
    href: '/wedding/rsvp',
  },
  {
    name: 'Events', 
    href: '/wedding/events',
  },
  {
    name: 'Accommodations', 
    href: '/wedding/accommodations',
  },
  {
    name: 'Gift Registry', 
    href: '/wedding/gift-registry',
  },
  {
    name: 'Travel Tips', 
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
              'flex h-[100px] grow items-center justify-center gap-2 rounded-md p-3 text-2xl font-medium hover:bg-emerald-100 hover:text-emerald-600 md:flex-none md:p-2 md:px-3',
              {
                'text-emerald-600': pathname === link.href,
              },
        )}
          >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}