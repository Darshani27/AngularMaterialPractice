import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-sheet-open-component',
  templateUrl: './bottom-sheet-open-component.component.html',
  styleUrls: ['./bottom-sheet-open-component.component.css']
})
export class BottomSheetOpenComponentComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOpenComponentComponent>) { }

  ngOnInit(): void {
  }
  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
