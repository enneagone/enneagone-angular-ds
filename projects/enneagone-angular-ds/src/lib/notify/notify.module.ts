import {NgModule} from '@angular/core';
import {NotifyComponent} from './notify.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    NotifyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NotifyComponent
  ]
})
export class NotifyModule { }
