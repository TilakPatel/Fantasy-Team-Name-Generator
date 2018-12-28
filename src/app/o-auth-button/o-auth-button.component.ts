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
    window.location.href = "https://fantasynamegeneratorbackend.herokuapp.com/auth";
  }

}
