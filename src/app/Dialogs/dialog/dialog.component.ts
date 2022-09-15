import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Dialog1Component } from '../dialog1/dialog1.component';

export interface DialogData {
  animal: string;
  name:string;
}
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  animal: any;
  name: any;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog()
  {
    this.dialog.open(Dialog1Component,{
      data:{
        animal:this.animal,
        name:this.name
      }
    }).afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
