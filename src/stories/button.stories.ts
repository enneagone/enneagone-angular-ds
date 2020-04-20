import { E9BtnComponent } from '../../projects/enneagone-angular-ds/src/lib/e9-btn/e9-btn.component';
import {storiesOf} from '@storybook/angular';

storiesOf('Button', module)
  .add('basic', () => ({
    component: E9BtnComponent,
    props: {
      label: 'test'
    }
  }));
