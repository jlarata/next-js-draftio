const players = [
    {
        id : '3958dc9e-742f-4377-85e9-fec4b6a6442a',
        nick : 'Ariel',
        password : '1234'
    },
    {
        id : '3958dc9e-742f-4377-85e9-fec4b6a6442b',
        nick : 'Lautaro',
        password : '1234'
    },
    {
        id : '3958dc9e-742f-4377-85e9-fec4b6a6442c',
        nick : 'Leo',
        password : '1234'
    },
    {
        id : '3958dc9e-742f-4377-85e9-fec4b6a6442d',
        nick : 'Pablo',
        password : '1234'
    }
]

const leagues = [
    {
        id : '3958dc9e-742f-4377-85e9-fec4b6a6442e',
        name : 'discordfyl',
        password : '1234'
    }
]

const tournaments = [
    {
        id : '3958dc9e-742f-4377-85e9-fec4b6a6442f',
        leagueId : leagues[0].id,
        name : 'draft01'
    }
]

const games = [
    
    {
        id : '3958dc9e-742f-4377-85e9-fec4b6a6442g',
        tournamentId : '3958dc9e-742f-4377-85e9-fec4b6a6442z',
        player1 : '200',
        player2 : '201',
        match1 : '1',
        match2 : '2',
        match3 : '1',
        result : '1',
    },
    {
        id : '3958dc9e-742f-4377-85e9-fec4b6a6442h',
        tournamentId : '3958dc9e-742f-4377-85e9-fec4b6a6442y',
        player1 : '202',
        player2 : '203',
        match1 : '1',
        match2 : '1',
        match3 : 'null',
        result : '1',
    },
    {
        id : '3958dc9e-742f-4377-85e9-fec4b6a6442i',
        tournamentId : '3958dc9e-742f-4377-85e9-fec4b6a6442x',
        player1 : '200',
        player2 : '202',
        match1 : '2',
        match2 : '1',
        match3 : '1',
        result : '1',
    },
    {
        id : '3958dc9e-742f-4377-85e9-fec4b6a6442aj',
        tournamentId : '3958dc9e-742f-4377-85e9-fec4b6a6442w',
        player1 : '201',
        player2 : '203',
        match1 : '2',
        match2 : '1',
        match3 : '0',
        result : '2',
    }
]

export {players, leagues, tournaments, games}