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
  const checkedRef = useRef(true);
  const unCheckedRef = useRef(false);

  return (
    <>
      <Typography>Checked</Typography>
      <Box className='flex gap-[10px]'>
        <Checkbox ref={checkedRef} />
        <Checkbox disabled ref={checkedRef} />
      </Box>

      <Typography>Unchecked</Typography>
      <Box className='flex gap-[10px]'>
        <Checkbox ref={unCheckedRef} />
        <Checkbox disabled ref={unCheckedRef} />
      </Box>
    </>
  );
};
