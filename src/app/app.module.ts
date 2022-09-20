import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './appModules/mat.module';
import { HeaderComponent } from './header/header/header.component';
import { ButtonIconComponent } from './Buttons and Icons/button-icon/button-icon.component';
import { DialogComponent } from './Dialogs/dialog/dialog.component';
import { Dialog1Component } from './Dialogs/dialog1/dialog1.component';
import { Menu1Component } from './Menus/menu1/menu1.component';
import { SliderComponent } from './Sliders/slider/slider.component';
import { DividerComponent } from './Divider/divider/divider.component';
import { RippleComponent } from './Ripples/ripple/ripple.component';
import { RadiobuttonComponent } from './RadioButton/radiobutton/radiobutton.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginatorComponent } from './Paginator/paginator/paginator.component';
import { SelectComponent } from './Select/select/select.component';
import { BottomSheetComponent } from './BottomSheet/bottom-sheet/bottom-sheet.component';
import { BottomSheetOpenComponentComponent } from './BottomSheet/bottom-sheet-open-component/bottom-sheet-open-component.component';
import { BadgeComponent } from './Badges/badge/badge.component';
import { GridListComponent } from './GridList/grid-list/grid-list.component';
import { CheckBoxComponent } from './CheckBox/check-box/check-box.component';
import { SlideToggleComponent } from './SlideToggle/slide-toggle/slide-toggle.component';
import { ProgressBarComponent } from './ProgressBar/progress-bar/progress-bar.component';
import { ProgressSpinnerComponent } from './ProgressSpinner/progress-spinner/progress-spinner.component';
import { CardComponent } from './Card/card/card.component';
import { SortheaderComponent } from './SortHeader/sortheader/sortheader.component';
import { AutocompleteComponent } from './AutoComplete/autocomplete/autocomplete.component';
import { SnackbarComponent } from './SnackBar/snackbar/snackbar.component';
import { ExpansionpanelComponent } from './ExpansionPanel/expansionpanel/expansionpanel.component';
import { TableComponent } from './Table/table/table.component';
import { Table1Component } from './Tables/table1/table1.component';
import { PaginatortableComponent } from './Tables/paginatortable/paginatortable.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonIconComponent,
    DialogComponent,
    Dialog1Component,
    Menu1Component,
    SliderComponent,
    DividerComponent,
    RippleComponent,
    RadiobuttonComponent,
    PaginatorComponent,
    SelectComponent,
    BottomSheetComponent,
    BottomSheetOpenComponentComponent,
    BadgeComponent,
    GridListComponent,
    CheckBoxComponent,
    SlideToggleComponent,
    ProgressBarComponent,
    ProgressSpinnerComponent,
    CardComponent,
    SortheaderComponent,
    AutocompleteComponent,
    SnackbarComponent,
    ExpansionpanelComponent,
    TableComponent,
    Table1Component,
    PaginatortableComponent,
    // FilterTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
