import {OverviewIconComponent} from '../app/components/overview-icon/overview-icon.component';
import {IconComponent} from '../../projects/enneagone-angular-ds/src/public-api';
import {color, select, withKnobs} from '@storybook/addon-knobs';

export default {
  title: 'Icon',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Overview = () => ({
  component: OverviewIconComponent
});

export const Custom = () => ({
  component: IconComponent,
  props: {
    name: 'fa fa-home',
    color: color( 'color', '#7C72A0'),
    size: select('size', ['xs', 'sm', 'md', 'lg', 'xl'], 'md'),
  }
});
