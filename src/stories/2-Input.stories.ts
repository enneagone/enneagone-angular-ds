import {OverviewInputComponent} from '../app/components/overview-input/overview-input.component';
import {InputComponent} from '../../projects/enneagone-angular-ds/src/lib/input/input.component';
import {boolean, color, text, withKnobs} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import {Input} from "@angular/core";

export default {
  title: 'Input',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onClickTask: action('Button clicked')
};

export const Overview = () => ({
  component: OverviewInputComponent
});

export const Custom = () => ({
  component: InputComponent,
  props: {
    value: '',
    label: text('label', 'Label'),
    placeholder: text('placeholder', 'Placeholder'),
    disable: boolean('disable', false),
    readOnly: boolean('readOnly', false),
    required: boolean('required', false),
    filled: boolean('filled', false),
    color: color('color', '#E0E0E0'),
    labelColor: color('labelColor', 'black'),
  }
});
