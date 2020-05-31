import {NgModule} from '@angular/core';
import {OverviewInputComponent} from './overview-input.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    OverviewInputComponent
  ],
  imports: [
    FormsModule
  ],
  exports: [
    OverviewInputComponent
  ]
})
export class OverviewButtonModule { }
