import { Meta, StoryObj } from '@storybook/react';
import { Box, Toggle, Typography } from '@ui';
import { FC } from 'react';

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
  return (
    <>
      <Typography>Checked</Typography>
      <Box className='flex gap-[10px]'>
        <Toggle state={true} setState={(state) => console.log("Get toggle state", state)} />
        <Toggle disabled state={true} />
      </Box>

      <Typography>Unchecked</Typography>
      <Box className='flex gap-[10px]'>
        <Toggle state={false} />
        <Toggle disabled state={false} />
      </Box>
    </>
  );
};
