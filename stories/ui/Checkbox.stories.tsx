import { FC, useCallback, useRef, useState } from 'react';
import Typography from 'ui/Typography/Typography';
import { Meta, StoryObj } from '@storybook/react';
import Checkbox from 'ui/Checkbox/Checkbox';
import Box from 'ui/Box/Box';

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
    },
    checkedClassName: {
      defaultValue: { summary: 'undefined' }
    },
    rounded: {
      defaultValue: { summary: 'sm' }
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
export const CheckboxStateVariants: CheckboxStory = {
  render: () => <CheckboxStatePreviewVariants />
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

const CheckboxStatePreviewVariants: FC = () => {
  const [unChecked, setChecked] = useState(true);
  const [checked, setUnChecked] = useState(true);
  const changeUnCheckedState = useCallback(() => setChecked((prev: boolean) => !prev), []);
  const changeCheckedState = useCallback(() => setUnChecked((prev: boolean) => !prev), []);

  return (
    <>
      <Typography>Checked</Typography>
      <Box className='flex gap-[10px]'>
        <Checkbox state={checked} onClick={changeCheckedState} />
        <Checkbox disabled state={checked} onClick={changeCheckedState} />
      </Box>

      <Typography>Unchecked</Typography>
      <Box className='flex gap-[10px]'>
        <Checkbox state={unChecked} onClick={changeUnCheckedState} />
        <Checkbox disabled state={unChecked} onClick={changeUnCheckedState} />
      </Box>
    </>
  );
};
