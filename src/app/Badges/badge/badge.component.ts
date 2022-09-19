import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit {
  hidden:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  showhide()
  {
    this.hidden=!this.hidden;
  }
}
