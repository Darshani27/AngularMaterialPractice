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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonIconComponent,
    DialogComponent,
    Dialog1Component,
    Menu1Component,
    SliderComponent,
    DividerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
