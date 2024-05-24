import { Meta, StoryObj } from '@storybook/react';
import { Box, Typography } from '@ui';
import { FC, useRef } from 'react';
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
    className: {
      defaultValue: { summary: 'undefined' }
    }
  }
};

export default meta;
export const CheckboxDefault: CheckboxStory = {
  args: {
    disabled: false
  }
};
export const CheckboxRefVariants: CheckboxStory = {
  render: () => <CheckboxRefPreviewVariants />
};

const CheckboxRefPreviewVariants: FC = () => {
  return (
    <>
      <Typography>Checked</Typography>
      <Box className='flex gap-[10px]'>
        <Checkbox state={true} setState={(state) => console.log("Get checkbox state", state)} />
        <Checkbox disabled state={true} />
      </Box>

      <Typography>Unchecked</Typography>
      <Box className='flex gap-[10px]'>
        <Checkbox state={false} />
        <Checkbox disabled state={false} />
      </Box>
    </>
  );
};
