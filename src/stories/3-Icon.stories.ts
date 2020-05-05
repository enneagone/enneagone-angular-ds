import {storiesOf} from '@storybook/angular';

export default {
  title: 'Icon',
};

storiesOf('Icon', module)
  .add('Overview', () => ({
    template: `
        <div style="
            display: flex;
            justify-content: start;
         ">
            <e9-icon name="fa fa-heart" color="#e00000"></e9-icon>
            <e9-icon name="fa fa-home" color="#7C72A0"></e9-icon>
         </div>
    `,
  }));