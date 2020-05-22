import {addDecorator, moduleMetadata} from '@storybook/angular';

import {
  EnneagoneAngularDsModule
} from "../projects/enneagone-angular-ds/src/public-api";

addDecorator(
  moduleMetadata({
    imports: [
      EnneagoneAngularDsModule
    ],
  })
);
