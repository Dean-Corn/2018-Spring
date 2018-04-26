import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { Game, User, Quote } from '../models/game';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  Model = new Game();
  Me: User;

  private _api = "http://localhost:9080/game";

  constructor(private http: Http, private _Messages: MessagesService) {
    setInterval(() => this.refresh(), 1000)
  }

  ngOnInit() {
  }

  refresh(){
    this.http.get(this._api + "/state")
      .subscribe(data => this.Model = data.json())
  }

  flipPicture(e: MouseEvent){
    this._Messages.Messages.push({Text: 'Picture Flipped', Type: 'success'})
    if(!this.IAmTheDealer()) return;
    this.http.post(this._api + "/picture", {})
      .subscribe();
  }

  submitQuote(e: MouseEvent, text: string) {
    e.preventDefault();
    this._Messages.Messages.push({Text: 'Quote Submitted', Type: 'success'})
    if(this.MyPlayedQuote()||this.IAmTheDealer()) return;
    this.http.post(this._api + "/quotes", {Text: text, PlayerId: this.Me.Name})
      .subscribe(data =>{
          if(data.json()){
            this.Me.MyQuotes.splice( this.Me.MyQuotes.indexOf(text), 1 );
          }
        }, err=> {
      console.log(err);
      });
  }

  chooseQuote(e: MouseEvent, text: string) {
    e.preventDefault();

    if(!this.IAmTheDealer()) return;
    this.http.post(this._api + "/quotes/choose", {Text: text, PlayerId: this.Me.Name})
      .subscribe(data=> {
        }, err=> {
        console.log(err);
        });
  }
  

  login(name: string){
    this._Messages.Messages.push({Text: 'You\'ve Logged In, Welcome: ' + name, Type: 'success'})
    this.http.get(this._api + "/quotes", { params : { playerId: name } })
    .subscribe(data=> this.Me =  {Name: name, MyQuotes: data.json(), Score:  0} );
  }



  MyPlayedQuote = () => this.Model.PlayedQuotes.find( x => x.PlayerId == this.Me.Name );

  ChosenQuote = () => this.Model.PlayedQuotes.find( x => x.Chosen);

  IsEveryoneDone = () => this.Model.PlayedQuotes.length == this.Model.Players.length - 1;

  IAmTheDealer = () => this.Me.Name == this.Model.DealerId;

  IAmFirstPlayer = () => this.Model.Players.length == 0;

  FirstQuotePicked = () => this.Model.PlayedQuotes.length > 0;

  CurrentPlayer = (name: string) => this.Me.Name == name;
}
