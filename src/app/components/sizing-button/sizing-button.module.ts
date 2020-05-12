import {NgModule} from '@angular/core';
import {SizingButtonComponent} from './sizing-button.component';
import {ButtonModule} from '../../../../projects/enneagone-angular-ds/src/public-api';

@NgModule({
  declarations: [
    SizingButtonComponent
  ],
  imports: [
    ButtonModule
  ],
  exports: [
    SizingButtonComponent
  ]
})
export class SizingButtonModule { }
