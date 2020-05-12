import {addDecorator, moduleMetadata} from '@storybook/angular';

import {
  ButtonModule,
  InputModule,
  IconModule,
  NotifyModule,
  DialogModule,
  AvatarModule
} from "../projects/enneagone-angular-ds/src/public-api";

addDecorator(
  moduleMetadata({
    imports: [
      ButtonModule,
      InputModule,
      IconModule,
      NotifyModule,
      DialogModule,
      AvatarModule
    ],
  })
);
