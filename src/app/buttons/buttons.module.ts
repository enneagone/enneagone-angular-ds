import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsComponent } from './buttons.component';

@NgModule({
  declarations: [
    ButtonsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: []
})
export class ButtonsModule { }
