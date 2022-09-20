import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.css']
})
export class GridListComponent implements OnInit {
  tiles=[{color:'lightblue',text:'hi',cols:2,rows:4},
  {color:'lightpink',text:'hello',cols:4,rows:2},
  {color:'yellow',text:'hippee',cols:3,rows:1}
]
  constructor() { }

  ngOnInit(): void {
  }

}
