import Typography from 'ui/Typography/Typography';
import { Meta, StoryObj } from '@storybook/react';
import Button from 'ui/Button/Button';
import { FC, ReactNode } from 'react';
import Box from 'ui/Box/Box';

type ButtonStory = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    componentSubtitle: 'Button component'
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: '**Button text**',
      defaultValue: { summary: '' },
      type: 'string'
    },
    size: {
      description: '**Button HTML size**',
      defaultValue: { summary: 'md' },
      options: ['xs', 'sm', 'md']
    },
    variant: {
      description: '**Button HTML variant**',
      defaultValue: { summary: 'primary' },
      options: ['primary', 'secondary', 'tertiary', 'reject']
    },
    buttonType: {
      defaultValue: { summary: 'button' },
      options: ['button', 'text']
    }
  }
};

export default meta;

export const buttonDefault: ButtonStory = {
  args: {
    children: 'Кнопка'
  }
};

export const ButtonTypeButtonVariants: ButtonStory = {
  args: {
    children: 'кнопка'
  },
  render: (args) => <ButtonVariants buttonType={args.buttonType} children={args.children} />
};

export const ButtonTypeTextVariants: ButtonStory = {
  args: {
    children: 'кнопка',
    buttonType: 'text'
  },
  render: (args) => <ButtonVariants buttonType={args.buttonType} children={args.children} />
};

export const LinkTypeButtonVariants: ButtonStory = {
  args: {
    as: 'a',
    children: 'ссылка',
    buttonType: 'button'
  },
  render: (args) => (
    <ButtonVariants as={args.as} buttonType={args.buttonType} children={args.children} />
  )
};

export const LinkTypeTextVariants: ButtonStory = {
  args: {
    as: 'a',
    children: 'ссылка',
    buttonType: 'text'
  },
  render: (args) => (
    <ButtonVariants as={args.as} buttonType={args.buttonType} children={args.children} />
  )
};

interface ButtonVariantsProps {
  as?: 'button' | 'a';
  buttonType?: 'button' | 'text';
  children: ReactNode;
}

const ButtonVariants: FC<ButtonVariantsProps> = ({
  as = 'button',
  buttonType = 'button',
  children
}) => (
  <Box>
    <Typography>Primary</Typography>
    <Box className={'flex gap-[10px]'}>
      <Button as={as} variant='primary' size='xs' buttonType={buttonType}>
        {children}
      </Button>
      <Button as={as} variant='primary' size='sm' buttonType={buttonType}>
        {children}
      </Button>
      <Button as={as} variant='primary' size='md' buttonType={buttonType}>
        {children}
      </Button>
    </Box>

    <Typography>Secondary</Typography>
    <Box className={'flex gap-[10px]'}>
      <Button as={as} variant='secondary' size='xs' buttonType={buttonType}>
        {children}
      </Button>
      <Button as={as} variant='secondary' size='sm' buttonType={buttonType}>
        {children}
      </Button>
      <Button as={as} variant='secondary' size='md' buttonType={buttonType}>
        {children}
      </Button>
    </Box>

    <Typography>Tertiary</Typography>
    <Box className={'flex gap-[10px]'}>
      <Button as={as} variant='tertiary' size='xs' buttonType={buttonType}>
        {children}
      </Button>
      <Button as={as} variant='tertiary' size='sm' buttonType={buttonType}>
        {children}
      </Button>
      <Button as={as} variant='tertiary' size='md' buttonType={buttonType}>
        {children}
      </Button>
    </Box>

    <Typography>Reject</Typography>
    <Box className={'flex gap-[10px]'}>
      <Button as={as} variant='reject' size='xs' buttonType={buttonType}>
        {children}
      </Button>
      <Button as={as} variant='reject' size='sm' buttonType={buttonType}>
        {children}
      </Button>
      <Button as={as} variant='reject' size='md' buttonType={buttonType}>
        {children}
      </Button>
    </Box>
  </Box>
);
