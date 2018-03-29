

export class Game {
    MyQuotes: string[] = [
        "Great minds think alike",
        "Axis of Evil",
        "There are two extremes"
    ];
    Players: User[] = [
        {Name: 'Dean Corn'},
        {Name: 'Jeffrey DaSilva'},
        {Name: 'Brandon Zlatniki'}
    ];

    Dealer: string = 'Dean Corn';
    Picture: string = "https://media3.s-nbcnews.com/j/msnbc/components/video/201803/tdy_news_welker_trump_180315_1920x1080.nbcnews-ux-1240-700.jpg";
    PlayedQuotes: Quote[] = [
        { Text: "That's fake news", PlayerName: "Jeffrey DaSilva", Chosen: false}
    ];
}

export class User {
    Name: string;

}

export class Quote {
    Text: string;
    PlayerName: string;
    Chosen: boolean = false;
}