import {action} from '@storybook/addon-actions';
import {OverviewButtonComponent} from '../app/components/overview-button/overview-button.component';
import {ButtonComponent} from '../../projects/enneagone-angular-ds/src/lib/button/button.component';
import {boolean, color, select, text, withKnobs} from '@storybook/addon-knobs';

export default {
  title: 'Button',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onClickTask: action('Button clicked')
};

export const Overview = () => ({
  component: OverviewButtonComponent,
  props: {
    btnClick: actionsData.onClickTask
  }
});

export const Custom = () => ({
  component: ButtonComponent,
  props: {
    value: text('value', 'Value'),
    color: color( 'color', '#7C72A0'),
    textColor: color('textColor', 'white'),
    disable: boolean('disable', false),
    type: select('type', ['a', 'button', 'submit'], 'button'),
    btnClick: actionsData.onClickTask
  }
});
