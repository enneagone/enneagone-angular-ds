import {NotifierStoryBookComponent} from '../app/components/notifier-story-book/notifier-story-book.component';

export default {
  title: 'Notification',
  excludeStories: /.*Data$/,
};

export const Overview = () => ({
  component: NotifierStoryBookComponent
});
