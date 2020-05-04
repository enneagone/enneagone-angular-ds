import { action } from '@storybook/addon-actions';
import {storiesOf} from '@storybook/angular';

function displayClick() {
  action('button clicked');
}

export default {
  title: 'Button',
};

storiesOf('Button', module)
  .add('Overview', () => ({
    template: `
        <div style="
            display: flex;
            justify-content: start;
            ">
          <e9-button class='margin-component' value='Standard' (btnClick)="${displayClick()}"></e9-button>
          <e9-button class='margin-component' value='Disable' disabled="true" (btnClick)="${displayClick()}"></e9-button>
          <e9-button class='margin-component' value='Cyan' color="#00FFFF" (btnClick)="${displayClick()}"></e9-button>
          <e9-button class='margin-component' value='Orange' color="#FF8C00" (btnClick)="${displayClick()}"></e9-button>
        </div>
    `,
  }));
