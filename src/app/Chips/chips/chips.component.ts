import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { ThemePalette } from '@angular/material/core';


export interface ChipColor {
  name: string;
  color: ThemePalette;
}

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css']
})
export class ChipsComponent implements OnInit {
  availableColors: ChipColor[] = [
    {name: 'none', color: undefined},
    {name: 'Primary', color: 'primary'},
    {name: 'Accent', color: 'accent'},
    {name: 'Warn', color: 'warn'},
  ];
  favFruits=[{name: 'Lemon'}, {name: 'Lime'}, {name: 'Apple'}];
  constructor() { }
  remove(fruit : any)
  {
    const index=this.favFruits.indexOf(fruit);
    if(index >=0)
    {
      this.favFruits.splice(index,1);
    }
  }
  add(event :any)
  {
    const valueOfEvent=(event.value || '').trim();
    if(valueOfEvent)
    {
      this.favFruits.push({name:valueOfEvent});
    }
    event.chipInput.clear();
  }
  ngOnInit(): void {
  }

}
