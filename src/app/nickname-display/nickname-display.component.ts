import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from './player-model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { template } from '@angular/core/src/render3';
import { isUndefined } from 'util';
@Component({
  selector: 'app-nickname-display',
  templateUrl: './nickname-display.component.html',
  styleUrls: ['./nickname-display.component.css']
})
export class NicknameDisplayComponent implements OnInit {
  players: Player[] = [];
  teamID: number;
  accessToken: String;
  serverURL: String = environment.URL;
  constructor(private route: ActivatedRoute, private http: HttpClient) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.teamID = params['teamID'];
      this.accessToken = params['token'];
    });
    this.http.get<[{ name: [{ full: String }] }]>(this.serverURL + '/team/players?teamID=' + this.teamID + "&accesstoken=" + this.accessToken).subscribe(data => {
      for (let player of data) {
        const tempPlayer: Player = new Player();
        tempPlayer.name = player.name[0].full[0];

        const params = new HttpParams()
          .set('name', tempPlayer.name);
        this.http.get<{ name: string, nicknames: [{ nickname: String, popularity: 0 }] }>(this.serverURL + '/player', { params: params }).subscribe(data => {
          if (data != null && data.nicknames.length > 0) {
            console.log(data);
            tempPlayer.nicknames = data.nicknames;
            this.players.push(tempPlayer);
            var x;
            for (x = 0; x < this.players.length; x++) {
              this.players[x].nicknames.sort(function (a, b) { return b.popularity - a.popularity });
            }
          }
        });
      }
    });

  }




}
