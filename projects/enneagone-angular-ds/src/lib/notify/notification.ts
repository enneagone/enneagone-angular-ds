import {NotificationType} from './notificationType';

export class Notification {

  public message: string;
  public type: NotificationType;

  constructor(message: string, type: NotificationType | null) {
    this.message = message;
    this.type = type;
  }
}
