import type { Meta, StoryObj } from "@storybook/react";
import Button from "./index";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: `select` },
    },
    icon: {
      control: {
        type: `select`,
      },
      options: [
        `share-naver`,
        `share-google`,
        `share-url`,
        `tab-chevron-left`,
        `tab-chevron-right`,
        `rectangle-chevron-left`,
        `rectangle-chevron-right`,
        `circle-chevron-left`,
        `circle-chevron-right`,
        `half-rectangle-chevron-left`,
        `half-rectangle-chevron-right`,
        `datepicker-prev`,
        `datepicker-next`,
      ],
    },
    appearance: {
      control: { type: `select` },
    },
    variant: {
      control: { type: `select` },
    },
    type: {
      control: { type: `select` },
    },
    onClick: {
      action: `clicked`,
    },
  },
  args: {
    label: `버튼명`,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Priamry: Story = {
  args: {
    label: "버튼명",
    size: 32,
    icon: "share-naver",
  },
};

export const Share: Story = {
  args: {
    variant: `outline`,
    size: 40,
    iconWidth: 32,
    iconHeight: 32,
    appearance: `round-rectangle`,
  },
  render: (args) => (
    <div style={{ display: `flex`, gap: `8px`, margin: `1em 0` }}>
      <Button
        {...args}
        size={args.size}
        icon="share-naver"
        iconWidth={args.iconWidth}
        iconHeight={args.iconHeight}
        label="네이버 캘린더로 공유하기"
      />
      <Button
        {...args}
        size={args.size}
        icon="share-google"
        iconWidth={args.iconWidth}
        iconHeight={args.iconHeight}
        label="구글 캘린더로 공유하기"
      />
      <Button
        {...args}
        size={args.size}
        icon="share-url"
        iconWidth={args.iconWidth}
        iconHeight={args.iconHeight}
        label="주소 복사하기"
      />
    </div>
  ),
};

export const Arrows: Story = {
  args: {},
  render: (args) => (
    <div style={{ display: `flex`, gap: `8px`, margin: `1em 0` }}>
      <Button
        {...args}
        variant="ghost"
        appearance="round-rectangle"
        size={60}
        icon="tab-chevron-left"
        iconColor="var(--gray70)"
        iconWidth={32}
        iconHeight={32}
        style={{ width: "48px" }}
      />
      <Button
        {...args}
        variant="ghost"
        appearance="round-rectangle"
        size={60}
        icon="tab-chevron-right"
        iconColor="var(--gray70)"
        iconWidth={32}
        iconHeight={32}
        style={{ width: "48px" }}
      />
      <Button
        {...args}
        variant="ghost"
        appearance="round-rectangle"
        size={60}
        icon="tab-chevron-left"
        iconColor="var(--gray70)"
        iconWidth={32}
        iconHeight={32}
        style={{ width: "48px" }}
        disabled
      />
      <Button
        {...args}
        variant="ghost"
        appearance="round-rectangle"
        size={60}
        icon="tab-chevron-right"
        iconColor="var(--gray70)"
        iconWidth={32}
        iconHeight={32}
        style={{ width: "48px" }}
        disabled
      />

      <Button
        {...args}
        variant="outline"
        appearance="round-rectangle"
        size={32}
        borderColor="var(--gray80)"
        icon="rectangle-chevron-left"
        iconColor="var(--gray80)"
        iconWidth={16}
        iconHeight={16}
      />
      <Button
        {...args}
        variant="outline"
        appearance="round-rectangle"
        size={32}
        borderColor="var(--gray80)"
        icon="rectangle-chevron-right"
        iconColor="var(--gray80)"
        iconWidth={16}
        iconHeight={16}
      />
      <Button
        {...args}
        variant="outline"
        appearance="round-rectangle"
        size={32}
        borderColor="var(--gray80)"
        icon="rectangle-chevron-left"
        iconColor="var(--gray80)"
        iconWidth={16}
        iconHeight={16}
        disabled
      />
      <Button
        {...args}
        variant="outline"
        appearance="round-rectangle"
        size={32}
        borderColor="var(--gray80)"
        icon="rectangle-chevron-right"
        iconColor="var(--gray80)"
        iconWidth={16}
        iconHeight={16}
        disabled
      />

      <Button
        {...args}
        variant="ghost"
        appearance="circle"
        size={32}
        icon="circle-chevron-left"
        iconWidth={32}
        iconHeight={32}
        iconColor="var(--gray90)"
      />
      <Button
        {...args}
        variant="ghost"
        appearance="circle"
        size={32}
        icon="circle-chevron-right"
        iconWidth={32}
        iconHeight={32}
        iconColor="var(--gray90)"
      />
      <Button
        {...args}
        variant="ghost"
        appearance="circle"
        size={32}
        icon="circle-chevron-left"
        iconWidth={32}
        iconHeight={32}
        iconColor="var(--gray90)"
        disabled
      />
      <Button
        {...args}
        variant="ghost"
        appearance="circle"
        size={32}
        icon="circle-chevron-right"
        iconWidth={32}
        iconHeight={32}
        iconColor="var(--gray90)"
        disabled
      />

      <Button
        {...args}
        variant="ghost"
        appearance="left-round-rectangle"
        size={24}
        icon="half-rectangle-chevron-left"
        iconWidth={24}
        iconHeight={24}
        iconColor="#222"
      />
      <Button
        {...args}
        variant="ghost"
        appearance="left-round-rectangle"
        size={24}
        icon="half-rectangle-chevron-right"
        iconWidth={24}
        iconHeight={24}
        iconColor="#222"
      />
      <Button
        {...args}
        variant="ghost"
        appearance="left-round-rectangle"
        size={24}
        icon="half-rectangle-chevron-left"
        iconWidth={24}
        iconHeight={24}
        iconColor="#222"
        disabled
      />
      <Button
        {...args}
        variant="ghost"
        appearance="left-round-rectangle"
        size={24}
        icon="half-rectangle-chevron-right"
        iconWidth={24}
        iconHeight={24}
        iconColor="#222"
        disabled
      />

      <Button
        {...args}
        variant="ghost"
        appearance="round-rectangle"
        size={32}
        icon="datepicker-prev"
        iconWidth={16}
        iconHeight={16}
        iconColor="var(--gray80)"
      />
      <Button
        {...args}
        variant="ghost"
        appearance="round-rectangle"
        size={32}
        icon="datepicker-next"
        iconWidth={16}
        iconHeight={16}
        iconColor="var(--gray80)"
      />
      <Button
        {...args}
        variant="ghost"
        appearance="round-rectangle"
        size={32}
        icon="datepicker-prev"
        iconWidth={16}
        iconHeight={16}
        iconColor="var(--gray80)"
        disabled
      />
      <Button
        {...args}
        variant="ghost"
        appearance="round-rectangle"
        size={32}
        icon="datepicker-next"
        iconWidth={16}
        iconHeight={16}
        iconColor="var(--gray80)"
        disabled
      />
    </div>
  ),
};
