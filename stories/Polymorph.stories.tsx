import { Meta, StoryObj } from '@storybook/react'
import Polymorph from 'ui/Polymorph/Polymorph'

export type PolymorphStory = StoryObj<typeof Polymorph>

const meta: Meta<typeof Polymorph> = {
  component: Polymorph,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Base component uses as base HTML tags with ref if it needed',
  },
  argTypes: {
    as: {
      type: 'string',
      description: '**Name of any HTML tag**',
      control: { type: 'text' },
      defaultValue: { summary: 'div' },
    },
    children: {
      defaultValue: { summary: '' },
      description: '**Any children element type of ReactNode**',
      control: 'text',
      type: 'string',
    },
  },
}

export default meta

export const PolymorphExample: PolymorphStory = {
  args: {
    as: 'div',
    children: 'Hello world',
  },
}
