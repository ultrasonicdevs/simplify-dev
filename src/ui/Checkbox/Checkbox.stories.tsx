import { useToggle } from '@hooks';
import { Meta, StoryObj } from '@storybook/react';
import { Box, Typography } from '@ui';

import { Checkbox } from './Checkbox';

type CheckboxStory = StoryObj<typeof Checkbox>;

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
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
export const CheckboxDefault: CheckboxStory = {
  args: {
    disabled: false,
    toggle: false,
  },
};

export const CheckboxDefaultUsage: CheckboxStory = {
  render: () => {
    const t = useToggle(false);

    return <Checkbox {...t} />;
  },
};

export const CheckboxVariants: CheckboxStory = {
  render: () => (
    <Box className="space-y-3">
      <Box>
        <Typography>Checked</Typography>
        <Box className="flex gap-3">
          <Checkbox toggle />
          <Checkbox disabled toggle />
        </Box>
      </Box>
      <Box>
        <Typography>Unchecked</Typography>
        <Box className="flex gap-3">
          <Checkbox toggle={false} />
          <Checkbox disabled toggle={false} />
        </Box>
      </Box>
    </Box>
  ),
};
