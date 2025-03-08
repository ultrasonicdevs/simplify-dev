import { Meta, StoryObj } from '@storybook/react';

import { Box } from './Box';

type BoxStory = StoryObj<typeof Box>;

const meta: Meta<typeof Box> = {
  component: Box,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Container component',
  },
  argTypes: {
    as: {
      options: [
        'div',
        'main',
        'ul',
        'ol',
        'aside',
        'form',
        'section',
        'article',
      ],
      description: '**Typeof as is container tag name as: **',
      defaultValue: { summary: 'div' },
      control: { type: 'select' },
      type: 'string',
    },
    children: {
      description: '**Content of element**',
      defaultValue: { summary: '' },
      control: 'text',
      type: 'string',
    },
    className: {
      description: '**Tailwind or css classes**',
      defaultValue: { summary: '' },
      control: 'text',
      type: 'string',
    },
  },
};

export default meta;

export const BoxDefault: BoxStory = {
  args: {
    children: 'Hello world',
  },
};
