import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ButtonV1 } from '../components/ButtonV1';

export default {
  title: 'Example/Button',
  component: ButtonV1,
} as ComponentMeta<typeof ButtonV1>;

const Template: ComponentStory<typeof ButtonV1> = (args) => <ButtonV1 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'button',
  label: 'Button Text',
  size: 'md',
  isRounded: false,
  variant: 'primary'
};
