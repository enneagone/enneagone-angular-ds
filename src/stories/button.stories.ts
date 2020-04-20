import { E9Btn } from '../../projects/enneagone-angular-ds/src/lib/e9-btn/e9-btn.component';
import {storiesOf} from '@storybook/angular';

storiesOf('Button', module)
  .add('basic', () => ({
    component: E9Btn,
    props: {
      label: 'test'
    }
  }));
