import type { Meta, StoryObj } from '@storybook/react';
import { basicButton } from './Button';
import { theme } from "@chakra-ui/theme"
import { getThemingArgTypes } from "@chakra-ui/storybook-addon"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components / Forms / Button",
  component: basicButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    // layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof basicButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const basic: Story = {
  args: {
    children: 'Basic Button',
    variant: 'solid',
    size: 'sm',
  },
};
basic.argTypes = {
  ...getThemingArgTypes(theme, "Button"),
  children: { type: "string" },
}
