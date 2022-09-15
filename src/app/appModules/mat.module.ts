import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatMenuModule} from '@angular/material/menu';
import {MatSliderModule} from '@angular/material/slider'; 
import {MatDividerModule} from '@angular/material/divider'; 
import {MatListModule} from '@angular/material/list'; 
import {MatRippleModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio'; 
import {MatSelectModule} from '@angular/material/select'; 
import {MatPaginatorModule} from '@angular/material/paginator'; 
import {MatBadgeModule} from '@angular/material/badge';
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 
import {MatProgressBarModule} from '@angular/material/progress-bar'; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const material=[MatProgressBarModule,MatProgressSpinnerModule,MatSlideToggleModule,MatCheckboxModule,MatGridListModule,MatBadgeModule,MatPaginatorModule,MatSelectModule,MatRadioModule,MatListModule,MatRippleModule,MatDividerModule,MatSliderModule,MatMenuModule,MatButtonModule,MatToolbarModule,MatIconModule,MatDialogModule,MatFormFieldModule]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    material
  ],
  exports:[material]
})
export class MatModule { }
