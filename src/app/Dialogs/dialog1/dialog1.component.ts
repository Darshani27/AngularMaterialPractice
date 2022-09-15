import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent, DialogData } from '../dialog/dialog.component';

@Component({
  selector: 'app-dialog1',
  templateUrl: './dialog1.component.html',
  styleUrls: ['./dialog1.component.css']
})
export class Dialog1Component implements OnInit {

  constructor(public dialogRef : MatDialogRef<DialogComponent>,@Inject(MAT_DIALOG_DATA) public data: DialogData){ }

  ngOnInit(): void {

  }
  onNoClick(): void {
    
    this.dialogRef.close();
  }
}
