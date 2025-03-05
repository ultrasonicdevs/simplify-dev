import { useToggle } from '@hooks';
import { Meta, StoryObj } from '@storybook/react';
import { Typography } from '@ui';
import { Checkbox } from './Checkbox';

type CheckboxStory = StoryObj<typeof Checkbox>;

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      defaultValue: { summary: false },
      type: 'boolean'
    },
    toggle: {
      defaultValue: { summary: false },
      type: 'boolean'
    },
    className: {
      defaultValue: { summary: '' },
      type: 'string'
    }
  }
};

export default meta;
export const CheckboxDefault: CheckboxStory = {
  args: {
    disabled: false,
    toggle: false
  }
};

export const CheckboxDefaultUsage: CheckboxStory = {
  render: () => {
    const t = useToggle(false);

    return <Checkbox {...t} />;
  }
};

export const CheckboxVariants: CheckboxStory = {
  render: () => (
    <div className='space-y-3'>
      <div>
        <Typography>Checked</Typography>
        <div className='flex gap-3'>
          <Checkbox toggle />
          <Checkbox disabled toggle />
        </div>
      </div>
      <div>
        <Typography>Unchecked</Typography>
        <div className='flex gap-3'>
          <Checkbox toggle={false} />
          <Checkbox disabled toggle={false} />
        </div>
      </div>
    </div>
  )
};
