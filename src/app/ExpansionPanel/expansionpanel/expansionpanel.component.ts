import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expansionpanel',
  templateUrl: './expansionpanel.component.html',
  styleUrls: ['./expansionpanel.component.css']
})
export class ExpansionpanelComponent implements OnInit {
  panelOpenState :boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
