

export class Game {

    Players: User[] = [
        {Name: 'Dean Corn', MyQuotes: []},
        {Name: 'Jeffrey DaSilva', MyQuotes: []},
        {Name: 'Brandon Zlatniki', MyQuotes: []}
    ];

    Dealer: string = 'Dean Corn';
    Picture: {
        url: string
    };
    PlayedQuotes: Quote[] = [
        { Text: "That's fake news", PlayerName: "Jeffrey DaSilva", Chosen: false }
    ];
}

export class User {
    Name: string;
    MyQuotes: string[] = [];
}

export class Quote {
    Text: string;
    PlayerName: string;
    Chosen: boolean = false;
}