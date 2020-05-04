import {addDecorator, configure, moduleMetadata} from '@storybook/angular';
import { NotifierStoryBookModule } from '../src/app/components/notifier-story-book/notifier-story-book.module';
import {
  ButtonModule,
  InputModule,
  IconModule
} from "../projects/enneagone-angular-ds/src/public-api";

configure(require.context('../src/stories', true, /\.stories\.ts$/), module);

addDecorator(
  moduleMetadata({
    imports: [
      NotifierStoryBookModule,
      ButtonModule,
      InputModule,
      IconModule
    ],
  })
);
