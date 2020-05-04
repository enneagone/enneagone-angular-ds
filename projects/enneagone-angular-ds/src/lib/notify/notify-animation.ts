import {animate, state, style, transition, trigger} from '@angular/animations';

export const notifyAnimation = trigger('notify', [
  state('void', style({
    opacity: 0,
    height: 0,
  })),
  state('show', style({
    opacity: 1,
    height: '*',
  })),
  transition('void => show, show => void', [
    animate('0.25s')
  ]),
]);
