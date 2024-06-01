const { db } = require('@vercel/postgres');
const {
  guest_test
} = require('../app/lib/test-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    //  CREATE TABLE IF NOT EXISTS guest_test (
    //    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    //    name VARCHAR(255) NOT NULL,
    //    email TEXT NOT NULL UNIQUE,
    //    password TEXT NOT NULL
    //  );
    //`;

    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS guest_test (
      guest_id VARCHAR(225) NOT NULL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
	    isInvitedToHaldi BOOLEAN NOT NULL,
	    isInvitedToMehendi BOOLEAN NOT NULL,
	    isInvitedToSangeet BOOLEAN NOT NULL,
	    isInvitedToMuhurtham BOOLEAN NOT NULL,
	    isInvitedToReception BOOLEAN NOT NULL,
	    isInvitedToShinzenshiki BOOLEAN NOT NULL,
	    isInvitedToHiroen BOOLEAN NOT NULL,
	    allergies TEXT NOT NULL,
	    isAttendingHaldi VARCHAR(225) NOT NULL,
	    isAttendingMehendi VARCHAR(225) NOT NULL,
	    isAttendingSangeet VARCHAR(225) NOT NULL,
	    isAttendingMuhurtham VARCHAR(225) NOT NULL,
	    isAttendingReception VARCHAR(225) NOT NULL,
	    isAttendingShinzenshiki VARCHAR(225) NOT NULL,
	    isAttendingHiroen VARCHAR(225) NOT NULL,
	    lastRSVPUpdateTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	    partySize INT NOT NULL,
	    partyMembers TEXT NOT NULL
      );
    `;

    console.log(`Created "guest_test" table`);

    // Insert data into the "guest_test" table
    const insertedGuests = await Promise.all(
      guest_test.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO guest_test (
			guest_id, 
			name, 
			email, 
			password, 
			isInvitedToHaldi, 
			isInvitedToMehendi, 
			isInvitedToSangeet, 
			isInvitedToMuhurtham, 
			isInvitedToReception, 
			isInvitedToShinzenshiki, 
			isInvitedToHiroen, 
			allergies, 
			isAttendingHaldi, 
			isAttendingMehendi, 
			isAttendingSangeet, 
			isAttendingMuhurtham, 
			isAttendingReception, 
			isAttendingShinzenshiki,
			isAttendingHiroen, 
			lastRSVPUpdateTime, 
			partySize, 
			partyMembers
		)
        VALUES (
			${user.guest_id}, 
			${user.name}, 
			${user.email}, 
			${hashedPassword}, 
			${user.isInvitedToHaldi}, 
			${user.isInvitedToMehendi}, 
			${user.isInvitedToSangeet},
			${user.isInvitedToMuhurtham}, 
			${user.isInvitedToReception}, 
			${user.isInvitedToShinzenshiki}, 
			${user.isInvitedToHiroen}, 
			${user.allergies}, 
			${user.isAttendingHaldi}, 
			${user.isAttendingMehendi}, 
			${user.isAttendingSangeet}, 
			${user.isAttendingMuhurtham}, 
			${user.isAttendingReception}, 
			${user.isAttendingShinzenshiki}, 
			${user.isAttendingHiroen}, 
			${user.lastRSVPUpdateTime}, 
			${user.partySize}, 
			${user.partyMembers}
		)
        ON CONFLICT (guest_id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedGuests.length} guests`);

    return {
      createTable,
      users: insertedGuests,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function removeTable(client){
  try {
    await client.sql`DROP TABLE IF EXISTS guest_test;`;

  } catch (error) {
    console.error('Error deleteing provided table. ', error);
    throw error;
  }

}
async function main() {
  const client = await db.connect();

  //await removeTable(client);
  await seedUsers(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
