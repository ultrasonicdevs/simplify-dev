import { FC, ReactNode } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { Button } from '@ui';

import { Table } from '../../../.storybook/ui';

type ButtonStory = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'ui/Button',
  argTypes: {
    as: {
      description: '**Button tag**',
      defaultValue: { summary: 'button' },
      control: { type: 'radio' },
      options: ['button', 'a'],
    },
    children: {
      description: '**Button text**',
      defaultValue: { summary: '' },
      type: 'string',
    },
    size: {
      description: '**Button HTML size**',
      defaultValue: { summary: 'md' },
      options: ['sm', 'md', 'lg', 'null'],
    },
    variant: {
      description: '**Button HTML variant**',
      defaultValue: { summary: 'primary' },
      options: ['primary', 'secondary', 'reject', 'null'],
    },
    buttonType: {
      defaultValue: { summary: 'button' },
      options: ['button', 'text', 'icon'],
    },
    disabled: {
      defaultValue: { summary: false },
      control: 'boolean',
    },
  },
};

export default meta;

export const ButtonDefault: ButtonStory = {
  args: {
    children: 'Кнопка',
  },
};

export const ButtonTypeButtonVariants: ButtonStory = {
  args: {
    children: 'кнопка',
  },
  render: (args) => (
    <ButtonVariants buttonType={args.buttonType} children={args.children} />
  ),
};

export const ButtonTypeTextVariants: ButtonStory = {
  args: {
    children: 'кнопка',
    buttonType: 'text',
  },
  render: (args) => (
    <ButtonVariants buttonType={args.buttonType} children={args.children} />
  ),
};

export const ButtonTypeIconVariants: ButtonStory = {
  args: {
    children: '🖼️',
    buttonType: 'icon',
  },
  render: (args) => (
    <ButtonVariants buttonType={args.buttonType} children={args.children} />
  ),
};

interface ButtonVariantsProps {
  as?: 'button' | 'a';
  buttonType?: 'button' | 'text' | 'icon';
  children: ReactNode;
}

const ButtonVariants: FC<ButtonVariantsProps> = ({
  as = 'button',
  buttonType = 'button',
  children,
}) => {
  const headers = ['Size', 'Primary', 'Secondary', 'Reject'];

  // Компоненты для каждой строки таблицы
  const rows = [
    {
      size: 'lg',
      primary: (
        <Button as={as} variant="primary" size="lg" buttonType={buttonType}>
          {children}
        </Button>
      ),
      secondary: (
        <Button as={as} variant="secondary" size="lg" buttonType={buttonType}>
          {children}
        </Button>
      ),
      reject: (
        <Button as={as} variant="reject" size="lg" buttonType={buttonType}>
          {children}
        </Button>
      ),
    },
    {
      size: 'md',
      primary: (
        <Button as={as} variant="primary" size="md" buttonType={buttonType}>
          {children}
        </Button>
      ),
      secondary: (
        <Button as={as} variant="secondary" size="md" buttonType={buttonType}>
          {children}
        </Button>
      ),
      reject: (
        <Button as={as} variant="reject" size="md" buttonType={buttonType}>
          {children}
        </Button>
      ),
    },
    {
      size: 'sm',
      primary: (
        <Button as={as} variant="primary" size="sm" buttonType={buttonType}>
          {children}
        </Button>
      ),
      secondary: (
        <Button as={as} variant="secondary" size="sm" buttonType={buttonType}>
          {children}
        </Button>
      ),
      reject: (
        <Button as={as} variant="reject" size="sm" buttonType={buttonType}>
          {children}
        </Button>
      ),
    },
  ];

  // Преобразуем строки в формат для Table
  const data = rows.map((row) => [
    { content: row.size },
    { content: row.primary },
    { content: row.secondary },
    { content: row.reject },
  ]);

  return <Table headers={headers} data={data} />;
};
