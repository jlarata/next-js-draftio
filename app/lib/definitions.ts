export type Player = 
    {
        id : string,
        nick : string,
        password : string
    }

export type League =
    {
        id : string,
        name : string,
        password : string
    }

export type Tournament =
    {
        id : string,
        leagueId : string,
        name : string
    }

export type Game = 
    {
        id : string,
        tournamentId : string,
        player1 : string,
        player2 : string,
        match1 : 0 | 1 | 2 | null,
        match2 : 0 | 1 | 2 | null,
        match3 : 0 | 1 | 2 | null,
        result : 0 | 1 | 2 | null,
    }