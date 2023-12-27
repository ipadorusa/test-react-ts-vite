import type { Meta, StoryObj } from "@storybook/react";
import Button from "./index";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: `select` },
    },
    variant: {
      control: { type: `select` },
    },
    appearance: {
      control: { type: `select` },
    },
    type: {
      control: { type: `select` },
    },
    color: {
      control: { type: `select` },
    },
    onClick: {
      action: `clicked`,
    },
  },
  args: {
    label: `버튼명`,
    size: 32,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    color: "primary",
    variant: "filled",
  },
  render: (args) => <Button {...args} />,
};

export const Filled: Story = {
  args: {
    variant: `filled`,
  },
  render: (args) => (
    <>
      <b>Primary Color</b>
      <div style={{ display: `flex`, gap: `8px`, margin: `1em 0` }}>
        <Button {...args} size={24} appearance="rectangle" color="primary" />
        <Button {...args} size={32} appearance="rectangle" color="primary" />
        <Button {...args} size={40} appearance="rectangle" color="primary" />
        <Button {...args} size={40} appearance="rectangle" color="primary" disabled />
      </div>
      <div style={{ display: `flex`, gap: `8px`, margin: `1em 0` }}>
        <Button {...args} size={24} appearance="round" color="primary" />
        <Button {...args} size={32} appearance="round" color="primary" />
        <Button {...args} size={40} appearance="round" color="primary" />
        <Button {...args} size={40} appearance="round" color="primary" disabled />
      </div>
    </>
  ),
};

export const Outline: Story = {
  args: {
    variant: `outline`,
  },
  render: (args) => (
    <>
      <div>
        <b>Primary Color</b>
      </div>
      <div style={{ display: `flex`, gap: `8px`, margin: `1em 0` }}>
        <Button {...args} size={24} appearance="rectangle" color="primary" />
        <Button {...args} size={32} appearance="rectangle" color="primary" />
        <Button {...args} size={40} appearance="rectangle" color="primary" />
        <Button {...args} size={40} appearance="rectangle" color="primary" disabled />
      </div>
      <div style={{ display: `flex`, gap: `8px`, margin: `1em 0` }}>
        <Button {...args} size={24} appearance="round" color="primary" />
        <Button {...args} size={32} appearance="round" color="primary" />
        <Button {...args} size={40} appearance="round" color="primary" />
        <Button {...args} size={40} appearance="round" color="primary" disabled />
      </div>
      <div style={{ display: `flex`, gap: `8px`, margin: `1em 0` }}>
        <Button
          {...args}
          size={24}
          appearance="round"
          color="primary"
          icon="plus"
          iconPos="before"
        />
        <Button
          {...args}
          size={32}
          appearance="round"
          color="primary"
          icon="plus"
          iconPos="before"
        />
        <Button
          {...args}
          size={40}
          appearance="round"
          color="primary"
          icon="plus"
          iconPos="before"
        />
        <Button
          {...args}
          size={40}
          appearance="round"
          color="primary"
          icon="plus"
          iconPos="before"
          disabled
        />
      </div>

      <b>Secondary Color</b>
      <div style={{ display: `flex`, gap: `8px`, margin: `1em 0` }}>
        <Button {...args} size={24} appearance="rectangle" color="secondary" />
        <Button {...args} size={32} appearance="rectangle" color="secondary" />
        <Button {...args} size={40} appearance="rectangle" color="secondary" />
        <Button {...args} size={40} appearance="rectangle" color="secondary" disabled />
      </div>
      <div style={{ display: `flex`, gap: `8px`, margin: `1em 0` }}>
        <Button {...args} size={24} appearance="round" color="secondary" />
        <Button {...args} size={32} appearance="round" color="secondary" />
        <Button {...args} size={40} appearance="round" color="secondary" />
        <Button {...args} size={40} appearance="round" color="secondary" disabled />
      </div>
      <div style={{ display: `flex`, gap: `8px`, margin: `1em 0` }}>
        <Button
          {...args}
          size={24}
          appearance="round"
          color="secondary"
          icon="plus"
          iconPos="before"
        />
        <Button
          {...args}
          size={32}
          appearance="round"
          color="secondary"
          icon="plus"
          iconPos="before"
        />
        <Button
          {...args}
          size={40}
          appearance="round"
          color="secondary"
          icon="plus"
          iconPos="before"
        />
        <Button
          {...args}
          size={40}
          appearance="round"
          color="secondary"
          icon="plus"
          iconPos="before"
          disabled
        />
      </div>

      <b>Indistinct Color</b>
      <div style={{ display: `flex`, gap: `8px`, margin: `1em 0` }}>
        <Button {...args} size={24} appearance="rectangle" color="indistinct" />
        <Button {...args} size={32} appearance="rectangle" color="indistinct" />
        <Button {...args} size={40} appearance="rectangle" color="indistinct" />
        <Button {...args} size={40} appearance="rectangle" color="indistinct" disabled />
      </div>
      <div style={{ display: `flex`, gap: `8px`, margin: `1em 0` }}>
        <Button {...args} size={24} appearance="round" color="indistinct" />
        <Button {...args} size={32} appearance="round" color="indistinct" />
        <Button {...args} size={40} appearance="round" color="indistinct" />
        <Button {...args} size={40} appearance="round" color="indistinct" disabled />
      </div>
      <div style={{ display: `flex`, gap: `8px`, margin: `1em 0` }}>
        <Button
          {...args}
          size={24}
          appearance="round"
          color="indistinct"
          icon="plus"
          iconPos="before"
        />
        <Button
          {...args}
          size={32}
          appearance="round"
          color="indistinct"
          icon="plus"
          iconPos="before"
        />
        <Button
          {...args}
          size={40}
          appearance="round"
          color="indistinct"
          icon="plus"
          iconPos="before"
        />
        <Button
          {...args}
          size={40}
          appearance="round"
          color="indistinct"
          icon="plus"
          iconPos="before"
          disabled
        />
      </div>

      <b>Action Color</b>
      <div style={{ display: `flex`, gap: `8px`, margin: `1em 0` }}>
        <Button {...args} size={24} appearance="rectangle" color="action" />
        <Button {...args} size={32} appearance="rectangle" color="action" />
        <Button {...args} size={40} appearance="rectangle" color="action" />
        <Button {...args} size={40} appearance="rectangle" color="action" disabled />
      </div>
      <div style={{ display: `flex`, gap: `8px`, margin: `1em 0` }}>
        <Button {...args} size={24} appearance="round" color="action" />
        <Button {...args} size={32} appearance="round" color="action" />
        <Button {...args} size={40} appearance="round" color="action" />
        <Button {...args} size={40} appearance="round" color="action" disabled />
      </div>
      <div style={{ display: `flex`, gap: `8px`, margin: `1em 0` }}>
        <Button
          {...args}
          size={24}
          appearance="round"
          color="action"
          icon="plus"
          iconPos="before"
        />
        <Button
          {...args}
          size={32}
          appearance="round"
          color="action"
          icon="plus"
          iconPos="before"
        />
        <Button
          {...args}
          size={40}
          appearance="round"
          color="action"
          icon="plus"
          iconPos="before"
        />
        <Button
          {...args}
          size={40}
          appearance="round"
          color="action"
          icon="plus"
          iconPos="before"
          disabled
        />
      </div>
    </>
  ),
};

export const Text: Story = {
  args: {
    variant: `text`,
    label: `수정하기`,
  },
  render: (args) => (
    <div style={{ display: `flex`, gap: `16px` }}>
      <Button {...args} size={13} color="teritary" underline />
      <Button {...args} size={14} color="primary" underline />
      <Button {...args} size={12} color="teritary" icon="plus" iconPos="after" />
    </div>
  ),
};
