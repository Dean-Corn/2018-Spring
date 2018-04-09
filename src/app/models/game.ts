

export class Game {

    Players: User[] = [
        {Name: 'Dean Corn', MyQuotes: []},
        {Name: 'Jeffrey DaSilva', MyQuotes: []},
        {Name: 'Brandon Zlatniki', MyQuotes: []}
    ];

    Dealer: string = 'Dean Corn';
    Picture: string = "https://media3.s-nbcnews.com/j/msnbc/components/video/201803/tdy_news_welker_trump_180315_1920x1080.nbcnews-ux-1240-700.jpg";
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