import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AvatarV1 } from '../components/AvatarV1';

export default {
  title: 'Example/Avatar',
  component: AvatarV1,
} as ComponentMeta<typeof AvatarV1>;

const Template: ComponentStory<typeof AvatarV1> = (args) => <AvatarV1 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  alt: 'Pic of a guy'
};
