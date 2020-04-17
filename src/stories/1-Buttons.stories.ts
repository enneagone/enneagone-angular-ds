import {ButtonComponent} from '../app/button/button.component';

export default { title: 'Button' }

export const Basic = () => ({
  component: ButtonComponent,
  props: {
    label: 'Basic button',
  },
});

export const Color = () => ({
  component: ButtonComponent,
  props: {
    label: 'Primary button',
    color: 'red'
  },
});

export const Disabled = () => ({
  component: ButtonComponent,
  props: {
    label: 'Disabled button',
    disabled: true
  },
});

export const withIcon = () => ({
  component: ButtonComponent,
  props: {
    label: 'Button with Icon',
    icon: 'IconTest'
  },
});
