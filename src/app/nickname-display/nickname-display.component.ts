import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-nickname-display',
  templateUrl: './nickname-display.component.html',
  styleUrls: ['./nickname-display.component.css']
})
export class NicknameDisplayComponent implements OnInit {
  nicknames: string[];
  constructor(private route:ActivatedRoute) {
    
   }

  ngOnInit() {
    
  }

}
