import {action} from '@storybook/addon-actions';
import {OverviewDialogComponent} from '../app/components/overview-dialog/overview-dialog.component';

export default {
  title: 'Confirmation',
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onConfirm: action('Action confirmed'),
  onDeny: action('Action refused')
};

export const Overview = () => ({
  component: OverviewDialogComponent,
  props: {
    title: 'Confirmation',
    message: 'Voulez vous confirmer cette action ?',
    accept: actionsData.onConfirm,
    deny: actionsData.onDeny
  }
});
