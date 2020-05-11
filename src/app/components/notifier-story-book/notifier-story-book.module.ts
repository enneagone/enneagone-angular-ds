import {NgModule} from '@angular/core';
import {NotifierStoryBookComponent} from './notifier-story-book.component';


@NgModule({
  declarations: [
    NotifierStoryBookComponent
  ],
  imports: [
    NotifyModule,
    ButtonModule
  ],
  exports: [
    NotifierStoryBookComponent
  ]
})
export class NotifierStoryBookModule { }
