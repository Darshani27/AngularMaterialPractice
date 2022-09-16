import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})
export class CheckBoxComponent implements OnInit {
  checked:boolean=false;
  disabled:boolean=false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  constructor() { }

  ngOnInit(): void {
  }

}
