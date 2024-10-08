export type Player = 
    {
        id : number,
        nick : string,
        password : number
    }

export type League =
    {
        id : number,
        name : string,
        password : number
    }

export type Tournament =
    {
        id : number,
        leagueId : number,
        name : string
    }

export type Game = 
    {
        id : number,
        tournamentId : number,
        player1 : number,
        player2 : number,
        match1 : 0 | 1 | 2,
        match2 : 0 | 1 | 2,
        match3 : 0 | 1 | 2,
        result : 0 | 1 | 2,
    }