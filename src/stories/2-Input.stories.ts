import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { InputComponent } from '../../projects/enneagone-angular-ds/src/lib/input/input.component';
import {storiesOf} from '@storybook/angular';

const inputValue = '';

export default {
  title: 'Input',
  component: InputComponent,
};

storiesOf('Input', module)
  .add('Overview', () => ({
    moduleMetadata: {
      declarations: [InputComponent],
    },
    template: `<e9-input value='${inputValue}'>`,
  }));
