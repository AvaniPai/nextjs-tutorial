import { Bellefair, Quicksand, Birthstone_Bounce, Noto_Serif_JP } from 'next/font/google';

export const quicksand = Quicksand({ weight: "300", subsets: ['latin']});

export const bellefair = Bellefair({ subsets: ['latin'], weight: "400"});

export const birthstonebounce = Birthstone_Bounce({ weight: "400", style: "normal", subsets: ['latin']})

export const noto_serif_japanese = Noto_Serif_JP({ weight: "400", style: "normal", subsets: ['latin']})