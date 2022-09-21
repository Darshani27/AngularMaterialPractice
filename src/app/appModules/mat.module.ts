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
import {MatCardModule} from '@angular/material/card';
import {MatSortModule} from '@angular/material/sort';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip'; 
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatChipsModule} from '@angular/material/chips'; 
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatStepperModule} from '@angular/material/stepper';

const material=[MatStepperModule,MatTabsModule,MatChipsModule,MatSidenavModule,MatDatepickerModule,MatTooltipModule,MatTableModule,MatExpansionModule,MatSnackBarModule,MatAutocompleteModule,MatSortModule,MatCardModule,MatProgressBarModule,MatProgressSpinnerModule,MatSlideToggleModule,MatCheckboxModule,MatGridListModule,MatBadgeModule,MatPaginatorModule,MatSelectModule,MatRadioModule,MatListModule,MatRippleModule,MatDividerModule,MatSliderModule,MatMenuModule,MatButtonModule,MatToolbarModule,MatIconModule,MatDialogModule,MatFormFieldModule]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    material
  ],
  exports:[material]
})
export class MatModule { }
