import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { IconComponent } from '../../projects/enneagone-angular-ds/src/lib/icon/icon.component';
import {storiesOf} from '@storybook/angular';

export default {
  title: 'Icon',
  component: IconComponent,
};

storiesOf('Icon', module)
  .add('Overview', () => ({
    moduleMetadata: {
      declarations: [IconComponent],
    },
    template: `
        <div style="
            display: flex;
            justify-content: start;
         ">
            <e9-icon name="fa fa-heart" color="#e00000"></e9-icon>
            <e9-icon name="fa fa-home" color="#7C72A0"></e9-icon>
         </div>
    `,
  }));
