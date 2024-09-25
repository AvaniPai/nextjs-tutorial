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
    en_name: 'HOME', 
    jp_name: 'トップ',
    en_href: '/wedding/en/home', 
    jp_href: '/wedding/jp/home',
  },
  {
    en_name: 'RSVP',
    jp_name: '出席の返事',
    en_href: '/wedding/en/rsvp',
    jp_href: '/wedding/jp/rsvp',
  },
  {
    en_name: 'EVENTS', 
    jp_name: '当日の流れ',
    en_href: '/wedding/en/events',
    jp_href: '/wedding/jp/events',
  },
  {
    en_name: 'ACCOMODATIONS', 
    jp_name: '宿泊',
    en_href: '/wedding/en/accommodations',
    jp_href: '/wedding/jp/accommodations',
  },
  {
    en_name: 'How to get to the venue', 
    jp_name: '臨時バス',
    en_href: '/wedding/en/gift-registry',
    jp_href: '/wedding/jp/gift-registry',
  },
  {
    en_name: 'TRAVEL TIPS', 
    jp_name: 'おすすめの旅行プラン',
    en_href: '/wedding/en/travel-tips',
    jp_href: '/wedding/jp/travel-tips',
  }
];

export default function NavLinks() {
  const pathname = usePathname();

  const lang = pathname.split('/')[2];
  // console.log(lang);

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={lang == "en" ? link.en_name : link.jp_name}
            href={lang == "en" ? link.en_href : link.jp_href}
            className={clsx(
              'flex grow items-center justify-center md:gap-2 rounded-md p-1 md:p-3 text-xs md:text-xl font-medium h-[40px] hover:bg-emerald-100 hover:text-emerald-600 md:h-[100px] md:flex-none md:p-2 md:px-3',
        )}
          >
            <p className="hidden md:block">{lang == "en" ? link.en_name : link.jp_name}</p>
            <p className="block md:hidden">{lang == "en" ? link.en_name : link.jp_name}</p>

          </Link>
        );
      })}
    </>
  );
}
