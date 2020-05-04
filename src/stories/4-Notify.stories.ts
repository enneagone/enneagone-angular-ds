import {storiesOf} from '@storybook/angular';

export default {
  title: 'Notification',
};

storiesOf('Notification', module)
  .add('Overview', () => ({
    template: `
        <div style="
            display: flex;
            justify-content: start;
         ">
            <e9-notifier-story-book></e9-notifier-story-book>
         </div>
    `,
  }));
