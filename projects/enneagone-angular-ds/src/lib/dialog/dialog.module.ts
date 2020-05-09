import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import {ButtonModule} from '../button/button.module';

@NgModule({
  declarations: [
    DialogComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    DialogComponent
  ]
})
export class DialogModule { }
