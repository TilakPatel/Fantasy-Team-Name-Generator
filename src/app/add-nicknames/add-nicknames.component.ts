import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { Player } from '../nickname-display/player-model';
import { JQueryStatic } from 'node_modules/jquery'
declare var $: JQueryStatic;
@Component({
  selector: 'app-add-nicknames',
  templateUrl: './add-nicknames.component.html',
  styleUrls: ['./add-nicknames.component.css']
})
export class AddNicknamesComponent implements OnInit {
  playerName: string;
  showAlert: boolean = false;
  fantasyTeamName: string;
  spinning: string = "";
  serverURL: String = environment.URL;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    $('#alert-good').hide();
    $('#alert-bad').hide();
  }
  updatePlayerName(event: KeyboardEvent) {
    this.playerName = (<HTMLInputElement>event.target).value.toLowerCase();
  }
  updateFantasyTeamName(event: KeyboardEvent) {
    this.fantasyTeamName = (<HTMLInputElement>event.target).value.toLowerCase();
  }

  submitFantasyName() {
    $('#alert-good').hide();
    $('#alert-bad').hide();
    this.spinning = "fa-spin";
    if (this.fantasyTeamName == undefined || this.playerName == undefined || this.fantasyTeamName.length == 0 || this.playerName.length == 0) {
      $('#alert-bad').show();
      this.spinning = "";
    } else {
      this.http.put<{ nicknames: String[] }>(this.serverURL + '/player?name=' + this.playerName + '&nicknames[]=' + this.fantasyTeamName, {}).subscribe(data => {
        
        let arr = [];
        arr.push(this.fantasyTeamName);
        const tempPlayer: Player = {
          name: this.playerName,
          nicknames: [{nickname: this.fantasyTeamName, popularity: 0}]
        }
        $('#alert-good').show();
        this.spinning = "";
      });
    }

  }
  closeGoodAlert() {
    $('#alert-good').hide();
  }
  closeBadAlert() {
    $('#alert-bad').hide();
  }

}
