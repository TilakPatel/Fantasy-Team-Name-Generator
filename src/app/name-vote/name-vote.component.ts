import { Component, OnInit } from '@angular/core';
import { Player } from '../nickname-display/player-model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-name-vote',
  templateUrl: './name-vote.component.html',
  styleUrls: ['./name-vote.component.css']
})
export class NameVoteComponent implements OnInit {
  n1: String;
  n2: String;
  currentPlayer: Player = new Player();

  serverURL: String = environment.URL;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.refreshNames();
  }

  refreshNames() {
    this.http.get<{ name: string, nicknames: [{ nickname: String, popularity: 0 }] }>(this.serverURL + '/randomPlayer').subscribe(data => {
      this.currentPlayer.name = data.name;
      this.currentPlayer.nicknames = data.nicknames;
      this.n1 = this.currentPlayer.nicknames[this.getRandomInt(0, this.currentPlayer.nicknames.length - 1)].nickname;
      this.n2 = this.currentPlayer.nicknames[this.getRandomInt(0, this.currentPlayer.nicknames.length - 1)].nickname;
    });

  }

  voteForName(name) { //takes 1 or 2
    console.log(name);
    this.http.put<{ nicknames: String[] }>(this.serverURL + '/vote?name=' + this.currentPlayer.name + '&nickname=' + (name == 1 ? this.n1 : this.n2), {}).subscribe(data => {});
    this.refreshNames();
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}