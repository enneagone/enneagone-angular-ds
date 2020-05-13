import {NgModule} from '@angular/core';
import {IconButtonComponent} from './icon-button.component';
import {ButtonModule} from '../../../../projects/enneagone-angular-ds/src/public-api';

@NgModule({
  declarations: [
    IconButtonComponent
  ],
  imports: [
    ButtonModule
  ],
  exports: [
    IconButtonComponent
  ]
})
export class IconButtonModule { }
