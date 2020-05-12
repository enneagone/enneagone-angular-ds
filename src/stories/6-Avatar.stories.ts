import {AvatarComponent} from '../../projects/enneagone-angular-ds/src/public-api';
import {boolean, color, select, text, withKnobs} from '@storybook/addon-knobs';
import {OverviewAvatarComponent} from '../app/components/overview-avatar/overview-avatar.component';


export default {
  title: 'Avatar',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Overview = () => ({
  component: OverviewAvatarComponent
});
export const Custom = () => ({
  component: AvatarComponent,
  props: {
    img: text('img', '/avatar.png'),
    size: select('size', ['xs', 'sm', 'md', 'lg', 'xl'], 'md'),
  }
});
