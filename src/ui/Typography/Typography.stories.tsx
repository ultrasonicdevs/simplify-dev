import { Meta, StoryObj } from '@storybook/react';
import { FC, ReactNode } from 'react';
import { Typography } from './Typography';

export type TypographyStory = StoryObj<typeof Typography>;

const meta: Meta<typeof Typography> = {
  component: Typography,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Text component'
  },
  argTypes: {
    as: {
      type: 'string',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'label'],
      description: '**Typeof as is text tag name as: **',
      control: { type: 'select' },
      defaultValue: { summary: 'p' }
    },
    children: {
      defaultValue: { summary: '' },
      description: '**Text of element**',
      control: 'text',
      type: 'string'
    },
    className: {
      defaultValue: { summary: '' },
      description: '**Tailwind class names**',
      control: 'text',
      type: 'string'
    }
  }
};

export default meta;

export const TypographyDefault: TypographyStory = {
  args: {
    children: 'Hello world'
  }
};
export const TypographyVariants: TypographyStory = {
  args: {
    children: 'Hello world'
  },
  render: (args) => <TypographyVariantsPreview children={args.children} />
};

const TypographyVariantsPreview: FC<{ children: ReactNode }> = ({ children }) => (
  <>
    <b>h1</b>
    <Typography as='h1'>{children}</Typography>
    <b>h2</b>
    <Typography as='h2'>{children}</Typography>
    <b>h3</b>
    <Typography as='h3'>{children}</Typography>
    <b>h4</b>
    <Typography as='h4'>{children}</Typography>
    <b>h5</b>
    <Typography as='h5'>{children}</Typography>
    <b>h6</b>
    <Typography as='h6'>{children}</Typography>
    <b>label</b>
    <br />
    <Typography as='label'>{children}</Typography>
    <br />
    <b>p</b>
    <Typography as='p'>{children}</Typography>
    <b>span</b>
    <br />
    <Typography as='span'>{children}</Typography>
    <br />
  </>
);
