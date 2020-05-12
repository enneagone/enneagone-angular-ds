import {action} from '@storybook/addon-actions';
import {OverviewButtonComponent} from '../app/components/overview-button/overview-button.component';
import {SizingButtonComponent} from '../app/components/sizing-button/sizing-button.component';
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

export const Size = () => ({
  component: SizingButtonComponent,
  props: {
    btnClick: actionsData.onClickTask
  }
});

export const Custom = () => ({
  component: ButtonComponent,
  props: {
    value: text('value', 'Value'),
    color: color( 'color', '#7C72A0'),
    borderColor: color( 'borderColor', 'white'),
    textColor: color('textColor', 'white'),
    outlined: boolean('outlined', false),
    type: select('type', ['a', 'button', 'submit'], 'button'),
    size: select('size', ['xs', 'sm', 'md', 'lg', 'xl'], 'md'),
    btnClick: actionsData.onClickTask
  }
});
