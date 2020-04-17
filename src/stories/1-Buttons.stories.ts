import {ButtonComponent} from '../app/button/button.component';

export default { title: 'Buttons' }

export const BasicButton = () => ({
  component: ButtonComponent,
  props: {
    label: 'Basic button',
  },
});

export const DisabledButton = () => ({
  component: ButtonComponent,
  props: {
    label: 'Disabled button',
    disabled: true
  },
});
