import { Meta, StoryObj } from '@storybook/react';
import { Box, Toggle, Typography } from '@ui';
import { FC, useRef } from 'react';

type ToggleStory = StoryObj<typeof Toggle>;

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      defaultValue: { summary: false },
      type: 'boolean'
    },
    className: {
      defaultValue: { summary: 'undefined' }
    },
    handleClassName: {
      defaultValue: { summary: 'undefined' }
    }
  }
};

export default meta;
export const CheckboxDefault: ToggleStory = {
  args: {
    disabled: false
  }
};
export const CheckboxVariants: ToggleStory = {
  render: () => <TogglePreviewVariants />
};

const TogglePreviewVariants: FC = () => {
  const checkedRef = useRef(true);
  const unCheckedRef = useRef(false);

  return (
    <>
      <Typography>Checked</Typography>
      <Box className='flex gap-[10px]'>
        <Toggle ref={checkedRef} />
        <Toggle disabled ref={checkedRef} />
      </Box>

      <Typography>Unchecked</Typography>
      <Box className='flex gap-[10px]'>
        <Toggle ref={unCheckedRef} />
        <Toggle disabled ref={unCheckedRef} />
      </Box>
    </>
  );
};
