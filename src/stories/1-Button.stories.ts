import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { ButtonComponent } from '../../projects/enneagone-angular-ds/src/public-api';

export default {
  title: 'Button',
  component: ButtonComponent,
};

export const Text = () => ({
  component: ButtonComponent,
  props: {
    text: 'Hello Button',
  },
});
