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
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Events
            </h1>
            <div className="bg-gray-100 md-100 h-1000 px-10 py-5 m-10" >
                
                {events.map((event) => (
                    <div key={event.name} className={event.bg_color}>
                        <div className="grid gap-6 grid-cols-3 p-3 m-10">
                            <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
                                <Image
                                    src={event.imgPath}
                                    width={1000}
                                    height={1000}
                                    className="styles.imagehidden md:block"
                                    alt="Screenshots of the dashboard project showing desktop version"
                                />
                            </div>
                            <div>
                                <h2>{event.name}</h2>
                                <p>Date: {event.date}</p>
                            </div>
                            <div>
                                <p>Description: {event.description}</p>
                            </div>
                        </div>
                    </div>
            ))}
            </div>
        </main>
    );
}