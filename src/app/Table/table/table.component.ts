import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'}
];


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource= ELEMENT_DATA;
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatTable)
  table!: MatTable<PeriodicElement>;
  constructor() { }

  ngOnInit(): void {
  }
  addData()
  {
    // this.dataSource.push({position: 4, name: 'Sodium', weight: 23, symbol: 'Na'});
    this.table.renderRows();
  }
  removeData()
  {
    // this.dataSource.pop();
    this.table.renderRows();
  }
  applyFilter(event : Event)
  {
    const filterValue=(event.target as HTMLInputElement).value;
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }

}
