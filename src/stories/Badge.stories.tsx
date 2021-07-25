import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BadgeV1 } from '../components/BadgeV1';

export default {
  title: 'Example/Badge',
  component: BadgeV1,
} as ComponentMeta<typeof BadgeV1>;

const Template: ComponentStory<typeof BadgeV1> = (args) => <BadgeV1 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Badge",
  variant: "primary",
  isRounded: true,
  isLarge: false
};
