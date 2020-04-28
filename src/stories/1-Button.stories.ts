import { action } from '@storybook/addon-actions';
import {ButtonComponent} from '../../projects/enneagone-angular-ds/src/public-api';
import {storiesOf} from '@storybook/angular';


import '../styles.css';

function displayClick() {
  action('button clicked');
}

export default {
  title: 'Button',
  component: ButtonComponent,
};

storiesOf('Button', module)
  .add('Overview', () => ({
    moduleMetadata: {
      declarations: [ButtonComponent],
    },
    template: `
        <div style="
            display: flex;
            justify-content: start;
            ">
          <e9-button class='margin-component' value='Standard' (onClick)="${displayClick()}"></e9-button>
          <e9-button class='margin-component' value='Disable' disabled="true" (onClick)="${displayClick()}"></e9-button>
        </div>
    `,
  }));
