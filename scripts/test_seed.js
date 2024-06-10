const { db } = require('@vercel/postgres');
const {
  guest_test
} = require('../app/lib/test-data.js');
const {
  guest_table
} = require('../app/lib/guests.js');
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
	  ReceptionOnly BOOLEAN NOT NULL,
	  SangeetReceptionOnly BOOLEAN NOT NULL,
	  SanMuhRec BOOLEAN NOT NULL,
	  AllEvents BOOLEAN NOT NULL,
	  AllUSJapan BOOLEAN NOT NULL,
	  isAttendingMehendi VARCHAR(225) NOT NULL,
	  mehendiPartySize INT NOT NULL,
	  isAttendingHaldi VARCHAR(225) NOT NULL,
	  haldiPartySize INT NOT NULL,
	  isAttendingSangeet VARCHAR(225) NOT NULL,
	  sangeetPartySize INT NOT NULL,
	  isAttendingMuhurtham VARCHAR(225) NOT NULL,
	  muhurthamPartySize INT NOT NULL,
	  isAttendingReception VARCHAR(225) NOT NULL,
	  receptionPartySize INT NOT NULL,
	  isAttendingShinzenshiki VARCHAR(225) NOT NULL,
	  shinzenshikiPartySize INT NOT NULL,
	  isAttendingHiroen VARCHAR(225) NOT NULL,
	  hiroenPartySize INT NOT NULL,
	  lastRSVPUpdateTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	  partyMembers TEXT NOT NULL,
	  allergies TEXT NOT NULL
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
			ReceptionOnly,
			SangeetReceptionOnly,
			SanMuhRec,
			AllEvents,
			AllUSJapan,
			isAttendingMehendi, 
			mehendiPartySize, 
			isAttendingHaldi, 
			haldiPartySize, 
			isAttendingSangeet, 
			sangeetPartySize, 
			isAttendingMuhurtham, 
			muhurthamPartySize, 
			isAttendingReception, 
			receptionPartySize, 
			isAttendingShinzenshiki,
			shinzenshikiPartySize, 
			isAttendingHiroen, 
			hiroenPartySize, 
			lastRSVPUpdateTime, 
			partyMembers,
			allergies 
		)
        VALUES (
			${user.guest_id}, 
			${user.name}, 
			${user.email}, 
			${hashedPassword}, 
			${user.ReceptionOnly},
			${user.SangeetReceptionOnly},
			${user.SanMuhRec},
			${user.AllEvents},
			${user.AllUSJapan},
			${user.isAttendingMehendi}, 
			${user.mehendiPartySize},
			${user.isAttendingHaldi}, 
			${user.haldiPartySize}, 
			${user.isAttendingSangeet}, 
			${user.sangeetPartySize},
			${user.isAttendingMuhurtham}, 
			${user.muhurthamPartySize},
			${user.isAttendingReception}, 
			${user.receptionPartySize},
			${user.isAttendingShinzenshiki}, 
			${user.shinzenshikiPartySize},
			${user.isAttendingHiroen}, 
			${user.hiroenPartySize},
			${user.lastRSVPUpdateTime}, 
			${user.partyMembers},
			${user.allergies} 
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
