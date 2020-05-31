import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { AvatarComponent } from './avatar/avatar.component';
import { DialogComponent } from './dialog/dialog.component';
import { IconComponent } from './icon/icon.component';
import { InputComponent } from './input/input.component';
import { NotifyComponent } from './notify/notify.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ButtonComponent,
    AvatarComponent,
    DialogComponent,
    IconComponent,
    InputComponent,
    NotifyComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ButtonComponent,
    AvatarComponent,
    DialogComponent,
    IconComponent,
    InputComponent,
    NotifyComponent
  ]
})
export class EnneagoneAngularDsModule { }
