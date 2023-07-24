import Typography from 'ui/Typography/Typography'
import { Meta, StoryObj } from '@storybook/react'
import Checkbox from 'ui/Checkbox/Checkbox'
import { FC, useRef } from 'react'
import Box from 'ui/Box/Box'

type CheckboxStory = StoryObj<typeof Checkbox>

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      defaultValue: { summary: false },
      type: 'boolean',
    },
    className: {
      defaultValue: { summary: 'undefined' },
    },
    toggleClassName: {
      defaultValue: { summary: 'undefined' },
    },
    rounded: {
      defaultValue: { summary: 'sm' },
    },
  },
}

export default meta
export const CheckboxDefault: CheckboxStory = {
  args: {
    disabled: false,
  },
}
export const CheckboxVariants: CheckboxStory = {
  render: () => <CheckboxPreviewVariants />,
}

const CheckboxPreviewVariants: FC = () => {
  const checkedRef = useRef(true)
  const unCheckedRef = useRef(false)

  return (
    <>
      <Typography>Checked</Typography>
      <Box className="flex gap-[10px]">
        <Checkbox ref={checkedRef} />
        <Checkbox disabled ref={checkedRef} />
      </Box>

      <Typography>Unchecked</Typography>
      <Box className="flex gap-[10px]">
        <Checkbox ref={unCheckedRef} />
        <Checkbox disabled ref={unCheckedRef} />
      </Box>
    </>
  )
}
