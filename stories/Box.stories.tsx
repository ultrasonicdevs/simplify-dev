import { Meta, StoryObj } from '@storybook/react'
import Box from 'ui/Box/Box'
import 'tailwind.css'

type BoxStory = StoryObj<typeof Box>

const meta: Meta<typeof Box> = {
  component: Box,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Container component',
  },
  argTypes: {
    as: {
      options: ['div', 'main', 'ul', 'ol', 'aside', 'form', 'section', 'article'],
      description: '**Typeof as is container tag name as: **',
      defaultValue: { summary: 'div' },
      control: { type: 'select' },
      type: 'string',
    },
    padding: {
      options: ['none', 'sm', 'md', 'lg'],
      description: '**Default padding variants: **',
      defaultValue: { summary: 'none' },
      type: 'string',
    },
    rounded: {
      options: ['none', 'sm', 'md', 'lg'],
      description: '**Default border radius variants: **',
      defaultValue: { summary: 'none' },
      type: 'string',
    },
    children: {
      description: '**Content of element**',
      defaultValue: { summary: '' },
      control: 'text',
      type: 'string',
    },
    className: {
      description: '**Tailwind classes**',
      defaultValue: { summary: '' },
      control: 'text',
      type: 'string',
    },
  },
}

export default meta

export const BoxDefault: BoxStory = {
  args: {
    children: 'Hello world',
  },
}
export const BoxVariants: BoxStory = {
  args: {
    children: 'Hello world',
  },
  render: (args) => (
    <Box className="flex flex-col gap-[10px]">
      <Box className="flex gap-[10px]">
        <Box className="bg-sky-300" rounded="none" padding="none">
          {args.children}
        </Box>
        <Box className="bg-sky-300" rounded="sm" padding="none">
          {args.children}
        </Box>
        <Box className="bg-sky-300" rounded="md" padding="none">
          {args.children}
        </Box>
        <Box className="bg-sky-300" rounded="lg" padding="none">
          {args.children}
        </Box>
      </Box>

      <Box className="flex gap-[10px]">
        <Box className="bg-sky-300" rounded="none" padding="sm">
          {args.children}
        </Box>
        <Box className="bg-sky-300" rounded="sm" padding="sm">
          {args.children}
        </Box>
        <Box className="bg-sky-300" rounded="md" padding="sm">
          {args.children}
        </Box>
        <Box className="bg-sky-300" rounded="lg" padding="sm">
          {args.children}
        </Box>
      </Box>

      <Box className="flex gap-[10px]">
        <Box className="bg-sky-300" rounded="none" padding="md">
          {args.children}
        </Box>
        <Box className="bg-sky-300" rounded="sm" padding="md">
          {args.children}
        </Box>
        <Box className="bg-sky-300" rounded="md" padding="md">
          {args.children}
        </Box>
        <Box className="bg-sky-300" rounded="lg" padding="md">
          {args.children}
        </Box>
      </Box>

      <Box className="flex gap-[10px]">
        <Box className="bg-sky-300" rounded="none" padding="lg">
          {args.children}
        </Box>
        <Box className="bg-sky-300" rounded="sm" padding="lg">
          {args.children}
        </Box>
        <Box className="bg-sky-300" rounded="md" padding="lg">
          {args.children}
        </Box>
        <Box className="bg-sky-300" rounded="lg" padding="lg">
          {args.children}
        </Box>
      </Box>
    </Box>
  ),
}
