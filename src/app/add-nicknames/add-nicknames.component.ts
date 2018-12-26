import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { Player } from '../nickname-display/player-model';
import { JQueryStatic } from 'node_modules/jquery'
declare var $:JQueryStatic;
@Component({
  selector: 'app-add-nicknames',
  templateUrl: './add-nicknames.component.html',
  styleUrls: ['./add-nicknames.component.css']
})
export class AddNicknamesComponent implements OnInit {
  playerName: string;
  showAlert: boolean = false;
  fantasyTeamName: string;
  serverURL: String = environment.URL;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    $('#alert').hide();
  }
  updatePlayerName(event: KeyboardEvent) {
    this.playerName = (<HTMLInputElement>event.target).value;
  }
  updateFantasyTeamName(event: KeyboardEvent) {
    this.fantasyTeamName = (<HTMLInputElement>event.target).value;
  }

  submitFantasyName() {
    $('#alert').hide();
    let arr = [];
    arr.push(this.fantasyTeamName);
    const tempPlayer: Player = {
      name: this.playerName,
      nicknames: arr
    }
    
    this.http.put<{ nicknames: String[] }>(this.serverURL + '/player?name=' + this.playerName + '&nicknames[]=' + this.fantasyTeamName, {}).subscribe(data => {
      var alertElement = document.getElementById('alert');
      $('#alert').show();
    });
  }
  closeAlert(){
    $('#alert').hide();
  }

}
