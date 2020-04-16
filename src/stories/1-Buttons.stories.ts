import {Button} from '@storybook/angular/demo';

export default {
  title: 'Buttons',
  component: Button,
};


export const BaseButton = () => ({
  component: Button,
  props: {
    text: 'Button',
  },
});

export const DisabledButton = () => ({
  component: Button,
  props: {
    text: 'Disabled button',
  },
});
