import {action} from '@storybook/addon-actions';
import {OverviewButtonComponent} from '../app/components/overview-button/overview-button.component';

export default {
  title: 'Button',
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onClickTask: action('button clicked')
};

export const Overview = () => ({
  component: OverviewButtonComponent,
  props: {
    btnClick: actionsData.onClickTask
  }
});

