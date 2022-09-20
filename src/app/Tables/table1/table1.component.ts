import { Component, OnInit } from '@angular/core';

interface Transaction {
  item: string;
  cost: number;
}

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css']
})
export class Table1Component implements OnInit {
  displayedColumns: string[] = ['item', 'cost'];
  transactions: Transaction[] = [
    {item: 'Beach ball', cost: 4},
    {item: 'Towel', cost: 5},
    {item: 'Frisbee', cost: 2},
    {item: 'Sunscreen', cost: 4},
    {item: 'Cooler', cost: 25},
    {item: 'Swim suit', cost: 15},
  ];
  constructor() { }

  ngOnInit(): void {
  }
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }

}
