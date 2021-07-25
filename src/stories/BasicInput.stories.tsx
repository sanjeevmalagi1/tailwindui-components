import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BasicInputV1 } from '../components/BasicInputV1';

export default {
  title: 'Example/BasicInput',
  component: BasicInputV1,
} as ComponentMeta<typeof BasicInputV1>;

const Template: ComponentStory<typeof BasicInputV1> = (args) => <BasicInputV1 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Input Name",
  value: "",
  type: 'text',
  underText: "",
};
