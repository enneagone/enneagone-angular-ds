import {action} from '@storybook/addon-actions';
import {OverviewButtonComponent} from '../app/components/overview-button/overview-button.component';
import {SizingButtonComponent} from '../app/components/sizing-button/sizing-button.component';
import {ButtonComponent} from '../../projects/enneagone-angular-ds/src/lib/button/button.component';
import {IconButtonComponent} from '../app/components/icon-button/icon-button.component';
import {boolean, color, select, text, number, withKnobs} from '@storybook/addon-knobs';

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

export const IconButton = () => ({
  component: IconButtonComponent,
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
    bold: boolean('bold', false),
    type: select('type', ['a', 'button', 'submit'], 'button'),
    size: select('size', ['xs', 'sm', 'md', 'lg', 'xl'], 'md'),
    width: number('width', null) + 'px',
    maxWidth: number('maxWidth', null) + 'px',
    icon: select('icon', ['fa fa-home', 'fa fa-gear', 'fa fa-key', 'fa fa-comments', null], null),
    iconLeft: select('iconLeft', ['fa fa-home', 'fa fa-gear', 'fa fa-key', 'fa fa-comments', null], null),
    iconRight: select('iconRight', ['fa fa-home', 'fa fa-gear', 'fa fa-key', 'fa fa-comments', null], null),
    btnClick: actionsData.onClickTask
  }
});
