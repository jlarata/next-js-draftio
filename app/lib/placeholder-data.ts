const players = [
    {
        id : '00000000-0000-0000-0000-000000000100',
        nick : 'Ariel',
        password : '1234'
    },
    {
        id : '00000000-0000-0000-0000-000000000101',
        nick : 'Lautaro',
        password : '1234'
    },
    {
        id : '00000000-0000-0000-0000-000000000102',
        nick : 'Leo',
        password : '1234'
    },
    {
        id : '00000000-0000-0000-0000-000000000103',
        nick : 'Pablo',
        password : '1234'
    }
]

const leagues = [
    {
        id : '00000000-0000-0000-0000-000000000200',
        name : 'discordfyl',
        password : '1234'
    }
]

const tournaments = [
    {
        id : '00000000-0000-0000-0000-000000000300',
        leagueId : leagues[0].id,
        name : 'draft01'
    }
]

const games = [
    
    {
        id : '00000000-0000-0000-0000-000000000400',
        tournamentId : tournaments[0].id,
        player1 : players[0].id,
        player2 : players[1].id,
        match1 : '1',
        match2 : '2',
        match3 : '1',
        result : '1',
    },
    {
        id : '00000000-0000-0000-0000-000000000401',
        tournamentId : tournaments[0].id,
        player1 : players[2].id,
        player2 : players[3].id,
        match1 : '1',
        match2 : '1',
        match3 : 'null',
        result : '1',
    },
    {
        id : '00000000-0000-0000-0000-000000000403',
        tournamentId : tournaments[0].id,
        player1 : players[0].id,
        player2 : players[2].id,
        match1 : '2',
        match2 : '1',
        match3 : '1',
        result : '1',
    },
    {
        id : '00000000-0000-0000-0000-000000000404',
        tournamentId : tournaments[0].id,
        player1 : players[1].id,
        player2 : players[3].id,
        match1 : '2',
        match2 : '1',
        match3 : '0',
        result : '2',
    }
]

export {players, leagues, tournaments, games}