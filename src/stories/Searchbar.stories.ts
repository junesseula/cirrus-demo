import type { Meta, StoryObj } from '@storybook/react';
import { CiSearchBar } from './Searchbar';
import { theme } from "@chakra-ui/theme"
import { getThemingArgTypes } from "@chakra-ui/storybook-addon"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components / Forms / Input / Searchbar",
  component: CiSearchBar,
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
} satisfies Meta<typeof CiSearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writincg stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    bg: "grey",
  },
};

