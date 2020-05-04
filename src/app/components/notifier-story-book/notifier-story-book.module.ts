import {NgModule} from '@angular/core';
import {NotifierStoryBookComponent} from './notifier-story-book.component';
import {NotifyModule, ButtonModule} from '../../../../projects/enneagone-angular-ds/src/public-api';


@NgModule({
  declarations: [
    NotifierStoryBookComponent
  ],
  imports: [
    NotifyModule, ButtonModule
  ],
  exports: [
    NotifierStoryBookComponent
  ]
})
export class NotifierStoryBookModule { }
