import { useToggle } from '@hooks';
import { Meta, StoryObj } from '@storybook/react';
import { Box, Toggle, Typography } from '@ui';

type ToggleStory = StoryObj<typeof Toggle>;

const meta: Meta<typeof Toggle> = {
  component: Toggle,
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

export const ToggleDefault: ToggleStory = {
  args: {
    disabled: false,
    toggle: false
  }
};

export const ToggleDefaultUsage: ToggleStory = {
  render: () => {
    const t = useToggle(false);

    return <Toggle {...t} />;
  }
};

export const ToggleVariants: ToggleStory = {
  render: () => (
    <Box className='space-y-3'>
      <Box>
        <Typography>Checked</Typography>
        <Box className='flex gap-3'>
          <Toggle toggle />
          <Toggle disabled toggle />
        </Box>
      </Box>
      <Box>
        <Typography>Unchecked</Typography>
        <Box className='flex gap-3'>
          <Toggle toggle={false} />
          <Toggle disabled toggle={false} />
        </Box>
      </Box>
    </Box>
  )
};
