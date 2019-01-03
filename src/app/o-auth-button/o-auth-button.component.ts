import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-o-auth-button',
  templateUrl: './o-auth-button.component.html',
  styleUrls: ['./o-auth-button.component.css']
})
export class OAuthButtonComponent implements OnInit {
  spinning: string = "";
  constructor() { }

  ngOnInit() {
  }

  doAuth(){
    this.spinning = "fa-spin";
    window.location.href = "https://api.login.yahoo.com/oauth2/request_auth?response_type=code&client_id=dj0yJmk9UlVqOW9lWURBSThnJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTNl&redirect_uri=https%3A%2F%2Ffantasynamegeneratorbackend.herokuapp.com%2Fcallback&scope=&state=3(%230%2F!~";
  }

}
