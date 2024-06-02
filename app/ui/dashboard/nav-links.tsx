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
    href: '/dashboard', 
    icon: HomeIcon 
  },
  {
    name: 'RSVP',
    href: '/dashboard/rsvp',
    icon: DocumentDuplicateIcon,
  },
  {
    name: 'Events', 
    href: '/dashboard/events',
    icon: UserGroupIcon    
  },
  {
    name: 'Accommodations', 
    href: '/dashboard/accommodations',
    icon: UserGroupIcon    
  },
  {
    name: 'Gift Registry', 
    href: '/dashboard/gift-registry',
    icon: UserGroupIcon
  },
  {
    name: 'TravelTips', 
    href: '/dashboard/travel-tips',
    icon: UserGroupIcon
  }
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
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
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
