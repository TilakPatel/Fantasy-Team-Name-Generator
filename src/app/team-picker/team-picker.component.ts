import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Team } from './team-model';
import { stringify } from '@angular/core/src/util';
@Component({
  selector: 'app-team-picker',
  templateUrl: './team-picker.component.html',
  styleUrls: ['./team-picker.component.css']
})
export class TeamPickerComponent implements OnInit {
  teams: Team[];
  accessToken: number; //yahoo api access token
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

   ngOnInit() {
    this.route.params.subscribe(params => this.accessToken = params['token']);
    this.http.get('http://localhost:8080/team/IDs?token=' + this.accessToken).subscribe(data => {
      for(let id of <String[]> data){
        var tempTeam = new Team();
        tempTeam.id = id;
        this.getNameFromId(id).subscribe(data => { //setName
          tempTeam.name = data.name
        });
        this.getPlayersFromId(id).subscribe(data => { //set players array
          for(let a in data){
            tempTeam.players.push((data[a].name[0].full[0]));
          }
        });
        this.getImageURLFromID(id).subscribe(data => { //set image url
          tempTeam.imageURL = data.URL;
        })
        console.log(tempTeam);
        //tempTeam.players = this.getPlayersFromId(id);
        //GETTEAMIMAGEURL
      }
    });
  }


  getNameFromId(team_ID) {
    return this.http.get<{name: String}>('http://localhost:8080/team/name?accesstoken=' + this.accessToken + '&teamID=' + team_ID);
  }
  getPlayersFromId(team_ID){
    return this.http.get<{arr: []}>('http://localhost:8080/team/players?accesstoken=' + this.accessToken + '&teamID=' + team_ID);
  }
  getImageURLFromID(team_ID){
    return this.http.get<{URL: String}>('http://localhost:8080/team/pictureURL?accesstoken=' + this.accessToken + '&teamID=' + team_ID);
  }

}
