import {moduleMetadata, storiesOf} from '@storybook/angular';
import {ButtonsModule} from '../app/buttons/buttons.module';
import {ButtonsComponent} from '../app/buttons/buttons.component';

storiesOf('Buttons', module)
  .addDecorator(moduleMetadata({ imports: [ ButtonsModule ]}))
  .add('Basic Button', () => ({
    component: ButtonsComponent,
    props: {
      Score: 0
    },
  }))
