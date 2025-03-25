import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@ui';

export default {
  title: 'ui/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: {
      control: 'boolean',
      defaultValue: { summary: false },
    },
    disabled: {
      control: 'boolean',
      defaultValue: { summary: false },
    },
    isError: {
      control: 'boolean',
      defaultValue: { summary: false },
    },
    label: { control: 'text', defaultValue: { summary: '' } },
  },
} satisfies Meta<typeof Checkbox>;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {},
};

export const BasicUsage: Story = {
  args: { label: 'label' },
};

export const Unchecked: Story = {
  args: {
    checked: false,
    label: 'Label for checkbox',
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    label: 'Label for checkbox',
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
    label: 'Label for checkbox',
  },
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
    label: 'Label for checkbox',
  },
};

export const ErrorState: Story = {
  args: {
    checked: false,
    isError: true,
    label: 'Label for checkbox',
  },
};

export const ErrorStateChecked: Story = {
  args: {
    checked: true,
    isError: true,
    label: 'Label for checkbox',
  },
};

export const ErrorStateDisabled: Story = {
  args: {
    checked: false,
    label: 'Label for checkbox',
    isError: true,
    disabled: true,
  },
};

export const ErrorStateCheckedDisabled: Story = {
  args: {
    checked: true,
    label: 'Label for checkbox',
    isError: true,
    disabled: true,
  },
};
