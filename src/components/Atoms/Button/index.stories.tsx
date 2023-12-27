import type { Meta, StoryObj } from "@storybook/react";
import Sample from "./index";

const meta: Meta<typeof Sample> = {
  component: Sample,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Sample>;

export const Primary: Story = {
  args: {
    label: "Test",
  },
};

export const Secondary: Story = {
  args: {
    label: "Test 2",
  },
};
