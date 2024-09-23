const { db } = require('@vercel/postgres');
const {
	guest_table
} = require('../app/lib/guests.js');
const {
	update_guest_list
} = require('../app/lib/update_email_guests.js');
const {
	new_guest_1
} = require('../app/lib/new_guests.js');

const bcrypt = require('bcrypt');

async function seedUsers(client) {
	try {
		await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

		const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS guests (
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

		console.log(`Created "guests" table`);

		// Insert data into the "guests" table
		const insertedGuests = await Promise.all(
			guest_table.map(async (user) => {
				const hashedPassword = await bcrypt.hash(user.password, 10);
				return client.sql`
        INSERT INTO guests (
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

async function removeTable(client) {
	try {
		await client.sql`DROP TABLE IF EXISTS {table_name};`;

	} catch (error) {
		console.error('Error deleteing provided table. ', error);
		throw error;
	}

}

async function updateTable(client) {
	try {
		const updateGuests = await Promise.all(
			update_guest_list.map(async (guest) => {
				return client.sql`
				UPDATE guests
				SET email = ${guest.email}
				WHERE guest_id = ${guest.guest_id}
				`;
			}),
		);

		console.log(`Updated users with lowercased emails.`);

	} catch (error) {
		console.error('Error updating the table.', error);
		throw error;
	}
}

async function addNewGuest(client) {
	try {
		const addedGuests = await Promise.all(
			new_guest_1.map(async (user) => {
				const hashedPassword = await bcrypt.hash("fionashome301", 10);
				await client.sql`
					INSERT INTO guests (
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
			})

		);
		console.log("Successfully added guest!")
	} catch (error) {
		console.error('Unable to add guest', error);
		throw error;
	}
}

async function grabRSVPData(client) {
	try {
		const data = await client.query({
			rowMode: 'array',
			text: 'SELECT name, email, guest_id, hasrsvped, isattendingshinzenshiki, shinzenshikipartysize, isattendinghiroen, hiroenpartysize, partymembers, allergies, allusjapan, japanonly FROM guests;'
		})
		await client.end();

		var fs = require('fs');
		var file = fs.createWriteStream('/Users/avani/sandbox/data/0923_guest_table.tsv');
		file.on('error', function(err) { throw error;})
		for( let i =0; i < data.rowCount; i++)	{
			file.write(data.rows[i].join('\t')+ "\n");
		}
		file.end();

		console.log("Finished pulling data and writing to file.")
	} catch (error) {
		console.error("Unable to retrieve query results", error);
		throw error;
	}
}
async function main() {
	const client = await db.connect();

	//await removeTable(client);
	//await seedUsers(client);
	//await updateTable(client);
	//await addNewGuest(client);
	await grabRSVPData(client);

	await client.end();
}

main().catch((err) => {
	console.error(
		'An error occurred while attempting to seed the database:',
		err,
	);
});
