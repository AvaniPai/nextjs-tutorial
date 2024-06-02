// import React from 'react';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
    const events = [
        { 
            name: 'Mehendi',
            date: '2024/Aug/28', 
            description: 'Mehendi event description', 
            imgPath: '/events/green.png',
            bg_color: 'bg-green-200'
        },
        { 
            name: 'Haldi', 
            date: '2024/Aug/28', 
            description: 'Haldi event description', 
            imgPath: '/events/yellow.png',
            bg_color: 'bg-yellow-200'
        },
        { 
            name: 'Sangeet', 
            date: '2024/Aug/30', 
            description: 'Sangeet event description', 
            imgPath: '/events/blue.png',
            bg_color: 'bg-blue-300'
        },
        { 
            name: 'Muhurtha', 
            date: '2024/Aug/31', 
            description: 'Muhurtha event description', 
            imgPath: '/events/red.png',
            bg_color: 'bg-pink-100'
        },
        { 
            name: 'Reception', 
            date: '2024/Aug/31', 
            description: 'Reception event description', 
            imgPath: '/events/catpng.png',
            bg_color: 'bg-red-300'
        },
    ];

    return (
        <main className="h-full">
            {/* <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Events
            </h1> */}
            <div className="md-100 py-1 h-screen md:py-5 md:h-full" >
                {events.map((event) => (
                    <div key={event.name} className={`${event.bg_color} grid gap-6 grid-cols-2 h-3/6 md:grid-cols-3 mb-2 md:p-3 md:m-10`}>
                        <div className="hidden items-center justify-center h-full bg-gray-100 md:block">
                            {/* <Image
                                src={event.imgPath}
                                width={1000}
                                height={1000}
                                className="styles.imagehidden md:flex"
                                alt="Screenshots of the dashboard project showing desktop version"
                            /> */}
                        </div>
                        <div>
                            <h2>{event.name}</h2>
                            <p>Date: {event.date}</p>
                        </div>
                        <div>
                            <p>Description: {event.description}</p>
                        </div>
                    </div>
            ))}
            </div>
        </main>
    );
}