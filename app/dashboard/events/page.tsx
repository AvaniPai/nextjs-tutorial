// import React from 'react';

export default function Page() {
    const events = [
        { name: 'Mehendi', date: '2024/Aug/28', description: 'Mehendi event description' },
        { name: 'Haldi', date: '2024/Aug/28', description: 'Haldi event description' },
        { name: 'Sangeet', date: '2024/Aug/30', description: 'Sangeet event description' },
        { name: 'Muhurtha', date: '2024/Aug/31', description: 'Muhurtha event description' },
        { name: 'Reception', date: '2024/Aug/31', description: 'Reception event description' },
    ];

    return (
        <div className="centered-container">
            <h1>Wedding Events</h1>
            {events.map((event) => (
                <div key={event.name}>
                    <h2>{event.name}</h2>
                    <p>Date: {event.date}</p>
                    <p>Description: {event.description}</p>
                </div>
            ))}
        </div>
    );
}