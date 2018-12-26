import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Team } from './team-model';
import { environment } from '../../environments/environment'
@Component({
  selector: 'app-team-picker',
  templateUrl: './team-picker.component.html',
  styleUrls: ['./team-picker.component.css']
})
export class TeamPickerComponent implements OnInit {
  teams: Team[] = [];
  serverURL: string = environment.URL;
  accessToken: number; //yahoo api access token
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    console.log('sdfjsdf');
    this.route.params.subscribe(params => this.accessToken = params['token']);
    this.http.get(this.serverURL + '/team/IDs?token=' + this.accessToken).subscribe(data => {
      console.log(data);
      for (let id of <String[]>data) {
        const tempTeam : Team = new Team();
        tempTeam.id = id;
        this.getNameFromId(id).subscribe(data => { //setName
          var s = data.name;
          tempTeam.name = s;
        });
        this.getPlayersFromId(id).subscribe(data => { //set players array
          for (let a in data) {
            tempTeam.players.push((data[a].name[0].full[0]));
          }
        });
        this.getImageURLFromID(id).subscribe(data => { //set image url
          tempTeam.imageURL = data.URL;
        });
        this.teams.push(tempTeam);
      }
      console.log(this.teams);
    });
  }


  getNameFromId(team_ID) {
    return this.http.get<{ name: String }>(this.serverURL + '/team/name?accesstoken=' + this.accessToken + '&teamID=' + team_ID);
  }
  getPlayersFromId(team_ID) {
    return this.http.get<{ arr: [] }>(this.serverURL + '/team/players?accesstoken=' + this.accessToken + '&teamID=' + team_ID);
  }
  getImageURLFromID(team_ID) {
    return this.http.get<{ URL: String }>(this.serverURL + '/team/pictureURL?accesstoken=' + this.accessToken + '&teamID=' + team_ID);
  }

 

}
