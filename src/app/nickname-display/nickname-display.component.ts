import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-nickname-display',
  templateUrl: './nickname-display.component.html',
  styleUrls: ['./nickname-display.component.css']
})
export class NicknameDisplayComponent implements OnInit {
  token: number;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.token = this.route.params['token'];
    console.log(this.token);
  }

}
