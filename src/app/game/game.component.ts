import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game';
import { User } from '../models/game';
import { Quote } from '../models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  Model = new Game();
  Me = new User();

  constructor() {
    this.Me.Name="Dean Corn"
   }

  ngOnInit() {
  }

  submitQuote(e: MouseEvent, text: string) {
    e.preventDefault();

    if(this.MyPlayedMyQuote()) return;

    this.Model.PlayedQuotes.push({Text: text, PlayerName: this.Me.Name, Chosen: false});
    this.Model.MyQuotes.splice( this.Model.MyQuotes.indexOf(text), 1 );
  }

  MyPlayedMyQuote(): Quote | null {
    return this.Model.PlayedQuotes.find( x => x.PlayerName == this.Me.Name );
  }
}
