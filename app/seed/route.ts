//import bcryptjs from 'bcryptjs';
import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import { players, leagues, tournaments, games } from '../lib/placeholder-data';

const client = await db.connect();

async function seedPlayers() {
   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
   await client.sql`
     CREATE TABLE IF NOT EXISTS players (
       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
       nick VARCHAR(255) NOT NULL,
       password TEXT NOT NULL
     );
   `;
   console.log('players table created');
   const insertedPlayers = await Promise.all(
     players.map(async (player) => {
      const hashedPassword = await bcrypt.hash(player.password, 10);
      return client.sql`
         INSERT INTO players (id, nick, password)
         VALUES (${player.id}, ${player.nick}, ${hashedPassword})
         ON CONFLICT (id) DO NOTHING;
       `;
     }),
   );
   return insertedPlayers;
 }

async function seedLeagues() {
   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

   await client.sql`
     CREATE TABLE IF NOT EXISTS leagues (
       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       password TEXT NOT NULL
     );
   `;
   console.log('leagues table created');

   const insertedLeagues = await Promise.all(
     leagues.map(async (league) => {
      const hashedPassword = await bcrypt.hash(league.password, 10);         
      return client.sql`
         INSERT INTO leagues (id, name, password)
         VALUES (${league.id}, ${league.name}, ${hashedPassword})
         ON CONFLICT (id) DO NOTHING;
       `
      })
     );
     return insertedLeagues;
 }

async function seedTournaments() {
   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
   await client.sql`
     CREATE TABLE IF NOT EXISTS tournaments (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      leagueid UUID NOT NULL,
      championid UUID,
      date DATE NOT NULL,
      name VARCHAR(255) NOT NULL
     );
   `;

   console.log('tournaments table created');

   const insertedTournaments = await Promise.all(
     tournaments.map(
       (tournament) => client.sql`
         INSERT INTO tournaments (id, leagueid, date, name)
         VALUES (${tournament.id}, ${tournament.leagueid}, ${tournament.date}, ${tournament.name})
         ON CONFLICT (id) DO NOTHING;
       `,
     ),
   );

   return insertedTournaments;
 }

async function seedGame() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  
  await client.sql`
    CREATE TABLE IF NOT EXISTS games (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    tournamentid UUID NOT NULL,
    player1 UUID NOT NULL,
    player2 UUID NOT NULL,
    match1 SMALLINT, 
    match2 SMALLINT, 
    match3 SMALLINT, 
    result SMALLINT
     );
   `; 

   console.log('games  table created');
   
  const insertedGame = await Promise.all(
     games.map(
       (game) => client.sql`
         INSERT INTO games (id, tournamentid, player1, player2, match1, match2, match3, result)
         VALUES (${game.id}, ${game.tournamentid}, ${game.player1}, ${game.player2}, ${game.match1}, ${game.match2}, ${game.match3}, ${game.result})
         ON CONFLICT (id) DO NOTHING;
       `,
     ),
   );
   
   return insertedGame;
 }

 async function seedChampions() {

  const updatedChampions = await client.sql`
    UPDATE tournaments
    SET championid = '00000000-0000-0000-0000-000000000103'
    WHERE id = '00000000-0000-0000-0000-000000000300';
    `;

  console.log('champions setted');

   return updatedChampions;
 }
 
 async function dropTables() { 
    await client.sql`
      drop TABLE IF EXISTS players;
      `; 
    await client.sql`
      drop TABLE IF EXISTS games;
      `; 
    await client.sql`
      drop TABLE IF EXISTS tournaments;
      `; 
    await client.sql`
      drop TABLE IF EXISTS leagues;
      `;
      await client.sql`COMMIT`;
      
    console.log('4 tables dropped succesfully');
 }

export async function GET() {
  /* return Response.json({
    message:
      'Uncomment this file and remove this line. You can delete this file when you are finished.',
  }); */
   try {
     await client.sql`BEGIN`;
     await dropTables()
     await seedPlayers();     
     await seedLeagues();
     await seedTournaments();
     await seedGame();
     await seedChampions();
     await client.sql`COMMIT`;
     //await dropTables()
     return Response.json({ message: 'Database seeded successfully' });
   } catch (error) {
     await client.sql`ROLLBACK`;
     return Response.json({ error }, { status: 500 });
   }
}
