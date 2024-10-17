const players = [
    {
        id : '00000000-0000-0000-0000-000000000100',
        nick : 'j la rata',
        password : '1234'
    },
    {
        id : '00000000-0000-0000-0000-000000000101',
        nick : 'RkT',
        password : '1234'
    },
    {
        id : '00000000-0000-0000-0000-000000000102',
        nick : 'Bajtinovich',
        password : '1234'
    },
    {
        id : '00000000-0000-0000-0000-000000000103',
        nick : 'Beret',
        password : '1234'
    },
    {
        id : '00000000-0000-0000-0000-000000000104',
        nick : 'zql',
        password : '1234'
    },
    {
        id : '00000000-0000-0000-0000-000000000105',
        nick : 'Nerto',
        password : '1234'
    },
    {
        id : '00000000-0000-0000-0000-000000000106',
        nick : 'gBot',
        password : '1234'
    },
    {
        id : '00000000-0000-0000-0000-000000000107',
        nick : 'Pirrón',
        password : '1234'
    },
    {
        id : '00000000-0000-0000-0000-000000000108',
        nick : 'Ballesta',
        password : '1234'
    },
    {
        id : '00000000-0000-0000-0000-000000000109',
        nick : 'Roll',
        password : '1234'
    },
    {
        id : '00000000-0000-0000-0000-000000000110',
        nick : 'Warpathor',
        password : '1234'
    },
    {
        id : '00000000-0000-0000-0000-000000000111',
        nick : 'Cacho&Juana',
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
        leagueid : leagues[0].id,
        championid: null,
        date: '2024-10-06',
        name : 'bburrowdraft'
    },
    {
        id : '00000000-0000-0000-0000-000000000301',
        leagueid : leagues[0].id,
        championid : null,
        date: '2024-09-23',
        name : 'eldrainedraft'
    }
    
]

const games = [
    {
        id : '00000000-0000-0000-0000-000000000400',
        tournamentid : tournaments[0].id,
        player1 : players[4].id,
        player2 : players[6].id,
        match1 : 1,
        match2 : 1,
        match3 : null,
        result : 1,
    }
    ,
    {
        id : '00000000-0000-0000-0000-000000000401',
        tournamentid : tournaments[0].id,
        player1 : players[4].id,
        player2 : players[3].id,
        match1 : 2,
        match2 : 2,
        match3 : null,
        result : 2,
    },
    {
        id : '00000000-0000-0000-0000-000000000402',
        tournamentid : tournaments[0].id,
        player1 : players[4].id,
        player2 : players[1].id,
        match1 : 2,
        match2 : 1,
        match3 : 2,
        result : 2,
    },
    {
        id : '00000000-0000-0000-0000-000000000403',
        tournamentid : tournaments[0].id,
        player1 : players[4].id,
        player2 : players[7].id,
        match1 : 1,
        match2 : 1,
        match3 : null,
        result : 1,
    },
    {
        id : '00000000-0000-0000-0000-000000000404',
        tournamentid : tournaments[0].id,
        player1 : players[4].id,
        player2 : players[0].id,
        match1 : 2,
        match2 : 2,
        match3 : null,
        result : 2,
    },
    {
        id : '00000000-0000-0000-0000-000000000405',
        tournamentid : tournaments[1].id,
        player1 : players[0].id,
        player2 : players[1].id,
        match1 : 1,
        match2 : 2,
        match3 : 1,
        result : 1,
    }
    ,
    {
        id : '00000000-0000-0000-0000-000000000406',
        tournamentid : tournaments[1].id,
        player1 : players[2].id,
        player2 : players[3].id,
        match1 : 1,
        match2 : 1,
        match3 : null,
        result : 1,
    },
    {
        id : '00000000-0000-0000-0000-000000000408',
        tournamentid : tournaments[0].id,
        player1 : players[4].id,
        player2 : players[10].id,
        match1 : 1,
        match2 : 1,
        match3 : null,
        result : 1,
    },
    {
        id : '00000000-0000-0000-0000-000000000409',
        tournamentid : tournaments[0].id,
        player1 : players[4].id,
        player2 : players[11].id,
        match1 : 1,
        match2 : 1,
        match3 : null,
        result : 1,
    }
    /* ,
    {
        id : '00000000-0000-0000-0000-000000000410',
        tournamentid : tournaments[1].id,
        player1 : players[1].id,
        player2 : players[3].id,
        match1 : 1,
        match2 : 1,
        match3 : null,
        result : 1,
    },
    {
        id : '00000000-0000-0000-0000-000000000412',
        tournamentid : tournaments[1].id,
        player1 : players[5].id,
        player2 : players[7].id,
        match1 : 2,
        match2 : 1,
        match3 : 0,
        result : 2,
    },
    {
        id : '00000000-0000-0000-0000-000000000413',
        tournamentid : tournaments[1].id,
        player1 : players[0].id,
        player2 : players[3].id,
        match1 : 1,
        match2 : 2,
        match3 : 1,
        result : 1,
    }
    ,
    {
        id : '00000000-0000-0000-0000-000000000415',
        tournamentid : tournaments[1].id,
        player1 : players[2].id,
        player2 : players[5].id,
        match1 : 2,
        match2 : 1,
        match3 : 1,
        result : 1,
    },
    {
        id : '00000000-0000-0000-0000-000000000416',
        tournamentid : tournaments[1].id,
        player1 : players[3].id,
        player2 : players[6].id,
        match1 : 2,
        match2 : 1,
        match3 : 0,
        result : 2,
    },
    {
        id : '00000000-0000-0000-0000-000000000419',
        tournamentid : tournaments[1].id,
        player1 : players[1].id,
        player2 : players[5].id,
        match1 : 2,
        match2 : 1,
        match3 : 1,
        result : 1,
    },
    {
        id : '00000000-0000-0000-0000-000000000420',
        tournamentid : tournaments[1].id,
        player1 : players[2].id,
        player2 : players[6].id,
        match1 : 2,
        match2 : 1,
        match3 : 0,
        result : 2,
    },
    {
        id : '00000000-0000-0000-0000-000000000421',
        tournamentid : tournaments[1].id,
        player1 : players[3].id,
        player2 : players[7].id,
        match1 : 1,
        match2 : 2,
        match3 : 1,
        result : 1,
    },
    {
        id : '00000000-0000-0000-0000-000000000423',
        tournamentid : tournaments[1].id,
        player1 : players[5].id,
        player2 : players[1].id,
        match1 : 2,
        match2 : 1,
        match3 : 1,
        result : 1,
    },
    {
        id : '00000000-0000-0000-0000-000000000424',
        tournamentid : tournaments[1].id,
        player1 : players[2].id,
        player2 : players[7].id,
        match1 : 2,
        match2 : 1,
        match3 : 0,
        result : 2,
    },
    {
        id : '00000000-0000-0000-0000-000000000425',
        tournamentid : tournaments[1].id,
        player1 : players[3].id,
        player2 : players[6].id,
        match1 : 1,
        match2 : 2,
        match3 : 1,
        result : 1,
    } */
]

export {players, leagues, tournaments, games}