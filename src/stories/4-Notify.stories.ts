import {NotifierStoryBookComponent} from '../app/components/notifier-story-book/notifier-story-book.component';
import {action} from '@storybook/addon-actions';

export default {
  title: 'Notification',
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onNotifEmitted: action('Notification emitted')
};

export const Overview = () => ({
  component: NotifierStoryBookComponent,
  props: {
    notifEmitted: actionsData.onNotifEmitted
  }
});
