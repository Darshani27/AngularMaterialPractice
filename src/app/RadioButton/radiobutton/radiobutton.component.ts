import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.css']
})
export class RadiobuttonComponent implements OnInit {
  animals=['bear','cat','lion','tiger'];
  animal: any;
  constructor() { }

  ngOnInit(): void {
  }

}
