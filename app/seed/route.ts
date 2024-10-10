//import bcryptjs from 'bcryptjs';
//import bcrypt from 'bcrypt';
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

   const insertedPlayers = await Promise.all(
     players.map(async (player) => {
//       const hashedPassword = await bcryptjs.hash(player.password, 10);
        return client.sql`
         INSERT INTO players (id, nick, password)
         VALUES (${player.id}, ${player.nick}, ${player.password})
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

   const insertedLeagues = await Promise.all(
     leagues.map(async (league) => {
//        const hashedPassword = await bcrypt.hash(league.password, 10);         
        return client.sql`
         INSERT INTO leagues (id, name, password)
         VALUES (${league.id}, ${league.name}, ${league.password})
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
      name VARCHAR(255) NOT NULL,
      leagueId UUID
     );
   `;

   const insertedTournaments = await Promise.all(
     tournaments.map(
       (tournament) => client.sql`
         INSERT INTO tournaments (id, name, leagueId)
         VALUES (${tournament.id}, ${tournament.name}, ${tournament.leagueId})
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
    id VARCHAR(255) NOT NULL PRIMARY KEY,
    tournamentId VARCHAR(255) NOT NULL,
    player1 VARCHAR(255) NOT NULL,
    player2 VARCHAR(255) NOT NULL,
    match1 VARCHAR(255) NOT NULL, 
    match2 VARCHAR(255) NOT NULL, 
    match3 VARCHAR(255), 
    result VARCHAR(255) NOT NULL
     );
   `; 
  const insertedGame = await Promise.all(
     games.map(
       (game) => client.sql`
         INSERT INTO games (id, tournamentId, player1, player2, match1, match2, match3, result)
         VALUES (${game.id}, ${game.tournamentId}, ${game.player1}, ${game.player2}, ${game.match1}, ${game.match2}, ${game.match3}, ${game.result})
         ON CONFLICT (id) DO NOTHING;
       `,
     ),
   );
   
   return insertedGame;
 }

export async function GET() {
  /* return Response.json({
    message:
      'Uncomment this file and remove this line. You can delete this file when you are finished.',
  }); */
   try {
     await client.sql`BEGIN`;
     await seedPlayers();     
     await seedLeagues();
     await seedTournaments();
     await seedGame();
     await client.sql`COMMIT`;
     return Response.json({ message: 'Database seeded successfully' });
   } catch (error) {
     await client.sql`ROLLBACK`;
     return Response.json({ error }, { status: 500 });
   }
}
