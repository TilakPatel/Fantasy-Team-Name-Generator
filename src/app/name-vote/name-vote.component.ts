import { Component, OnInit } from '@angular/core';
import {Player} from '../nickname-display/player-model';
@Component({
  selector: 'app-name-vote',
  templateUrl: './name-vote.component.html',
  styleUrls: ['./name-vote.component.css']
})
export class NameVoteComponent implements OnInit {
  p1: Player;
  p2: Player;
  constructor() { }

  ngOnInit() {
  }

  refreshPlayers(){
    
  }

}
