import { useToggle } from '@hooks';
import { Meta, StoryObj } from '@storybook/react';
import { Toggle } from '@ui';

type ToggleStory = StoryObj<typeof Toggle>;

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      defaultValue: { summary: false },
      type: 'boolean',
    },
    toggle: {
      defaultValue: { summary: false },
      type: 'boolean',
    },
    className: {
      defaultValue: { summary: '' },
      type: 'string',
    },
  },
};

export default meta;

export const ToggleDefault: ToggleStory = {
  args: {
    disabled: false,
    toggle: false,
  },
};

export const ToggleDefaultUsage: ToggleStory = {
  render: () => {
    const t = useToggle(false);

    return <Toggle {...t} />;
  },
};

export const ToggleVariants: ToggleStory = {
  render: () => (
    <div className="space-y-3">
      <div>
        <p>Checked</p>
        <div className="flex gap-3">
          <Toggle toggle />
          <Toggle disabled toggle />
        </div>
      </div>
      <div>
        <p>Unchecked</p>
        <div className="flex gap-3">
          <Toggle toggle={false} />
          <Toggle disabled toggle={false} />
        </div>
      </div>
    </div>
  ),
};
