import { GlobeAltIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function AcmeLogo() {
  return (
      <Image
        src="/as_logo_white.png"
        width={100}
        height={100}
        alt="Avani and Shusuke's wedding logo"
        className="justify-self-center"
        />
  );
}
