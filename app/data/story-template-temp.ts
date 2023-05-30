export const template = `import type { Meta, StoryObj } from '@storybook/react';
//import component\nconst meta: Meta<//type of component> = {
 title: //title of component,
 component: //component
};
export default meta;
type Story = StoryObj<//type of component>;
const StoryTemplate: Story = {
 render: (args) => //render component
};
export Primary = {
 ...StoryTemplate,
 args: {
 //component's props
 }
}`;
