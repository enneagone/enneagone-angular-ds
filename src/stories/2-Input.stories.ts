import {storiesOf} from '@storybook/angular';


export default {
  title: 'Input',
};

storiesOf('Input', module)
  .add('Overview', () => ({
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
