import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { InputComponent } from '../../projects/enneagone-angular-ds/src/lib/input/input.component';
import {storiesOf} from '@storybook/angular';


export default {
  title: 'Input',
  component: InputComponent,
};

storiesOf('Input', module)
  .add('Overview', () => ({
    moduleMetadata: {
      declarations: [InputComponent],
    },
    template: `
        <div style="
            display: flex;
            justify-content: start;
         ">
            <e9-input class='margin-component' value=''></e9-input>
            <e9-input class='margin-component' value='disable' disabled='true'></e9-input>
            <e9-input class='margin-component' value='' placeholder='placeholder'></e9-input>
            <e9-input class='margin-component' value='readonly' readOnly='true'></e9-input>
         </div>
    `,
  }));
