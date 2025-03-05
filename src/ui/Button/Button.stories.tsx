import { FC, ReactNode } from 'react';

import { Meta, StoryObj } from '@storybook/react';
<<<<<<< HEAD
import { FC, ReactNode } from 'react';
=======
import { Box, Typography } from '@ui';

>>>>>>> e64954c2318aaa8158b4f6e51780fcbe65ce95fd
import { Button } from './Button';

type ButtonStory = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    componentSubtitle: 'Button component',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: '**Button text**',
      defaultValue: { summary: '' },
      type: 'string',
    },
    size: {
      description: '**Button HTML size**',
      defaultValue: { summary: 'md' },
<<<<<<< HEAD
      options: ['sm', 'md', 'null']
=======
      options: ['xs', 'sm', 'md'],
>>>>>>> e64954c2318aaa8158b4f6e51780fcbe65ce95fd
    },
    variant: {
      description: '**Button HTML variant**',
      defaultValue: { summary: 'primary' },
<<<<<<< HEAD
      options: ['primary', 'secondary', 'reject', 'null']
=======
      options: ['primary', 'secondary', 'tertiary', 'reject'],
>>>>>>> e64954c2318aaa8158b4f6e51780fcbe65ce95fd
    },
    buttonType: {
      defaultValue: { summary: 'button' },
      options: ['button', 'text'],
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

export const LinkTypeButtonVariants: ButtonStory = {
  args: {
    as: 'a',
    children: 'ссылка',
    buttonType: 'button',
  },
  render: (args) => (
    <ButtonVariants
      as={args.as}
      buttonType={args.buttonType}
      children={args.children}
    />
  ),
};

export const LinkTypeTextVariants: ButtonStory = {
  args: {
    as: 'a',
    children: 'ссылка',
    buttonType: 'text',
  },
  render: (args) => (
    <ButtonVariants
      as={args.as}
      buttonType={args.buttonType}
      children={args.children}
    />
  ),
};

interface ButtonVariantsProps {
  as?: 'button' | 'a';
  buttonType?: 'button' | 'text';
  children: ReactNode;
}

const ButtonVariants: FC<ButtonVariantsProps> = ({
  as = 'button',
  buttonType = 'button',
  children,
}) => (
<<<<<<< HEAD
  <div className='overflow-x-auto p-4'>
    <table className='w-full border-collapse border border-gray-300 shadow-md rounded-lg'>
      <thead>
        <tr className='bg-gray-100 text-gray-700'>
          <th className='p-3 border border-gray-300'></th>
          <th className='p-3 border border-gray-300'>Primary</th>
          <th className='p-3 border border-gray-300'>Secondary</th>
          <th className='p-3 border border-gray-300'>Reject</th>
        </tr>
      </thead>
      <tbody>
        <tr className='bg-white hover:bg-gray-50'>
          <th className='p-3 border border-gray-300'>Size: md</th>
          <td className='p-3 border border-gray-300'>
            <Button as={as} variant='primary' size='md' buttonType={buttonType}>
              {children}
            </Button>
          </td>
          <td className='p-3 border border-gray-300'>
            <Button as={as} variant='secondary' size='md' buttonType={buttonType}>
              {children}
            </Button>
          </td>
          <td className='p-3 border border-gray-300'>
            <Button as={as} variant='reject' size='md' buttonType={buttonType}>
              {children}
            </Button>
          </td>
        </tr>
        <tr className='bg-white hover:bg-gray-50'>
          <th className='p-3 border border-gray-300'>Size: sm</th>
          <td className='p-3 border border-gray-300'>
            <Button as={as} variant='primary' size='sm' buttonType={buttonType}>
              {children}
            </Button>
          </td>
          <td className='p-3 border border-gray-300'>
            <Button as={as} variant='secondary' size='sm' buttonType={buttonType}>
              {children}
            </Button>
          </td>
          <td className='p-3 border border-gray-300'>
            <Button as={as} variant='reject' size='sm' buttonType={buttonType}>
              {children}
            </Button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
=======
  <Box>
    <Typography>Primary</Typography>
    <Box className={'flex gap-[10px]'}>
      <Button as={as} variant="primary" size="xs" buttonType={buttonType}>
        {children}
      </Button>
      <Button as={as} variant="primary" size="sm" buttonType={buttonType}>
        {children}
      </Button>
      <Button as={as} variant="primary" size="md" buttonType={buttonType}>
        {children}
      </Button>
    </Box>

    <Typography>Secondary</Typography>
    <Box className={'flex gap-[10px]'}>
      <Button as={as} variant="secondary" size="xs" buttonType={buttonType}>
        {children}
      </Button>
      <Button as={as} variant="secondary" size="sm" buttonType={buttonType}>
        {children}
      </Button>
      <Button as={as} variant="secondary" size="md" buttonType={buttonType}>
        {children}
      </Button>
    </Box>

    <Typography>Tertiary</Typography>
    <Box className={'flex gap-[10px]'}>
      <Button as={as} variant="tertiary" size="xs" buttonType={buttonType}>
        {children}
      </Button>
      <Button as={as} variant="tertiary" size="sm" buttonType={buttonType}>
        {children}
      </Button>
      <Button as={as} variant="tertiary" size="md" buttonType={buttonType}>
        {children}
      </Button>
    </Box>

    <Typography>Reject</Typography>
    <Box className={'flex gap-[10px]'}>
      <Button as={as} variant="reject" size="xs" buttonType={buttonType}>
        {children}
      </Button>
      <Button as={as} variant="reject" size="sm" buttonType={buttonType}>
        {children}
      </Button>
      <Button as={as} variant="reject" size="md" buttonType={buttonType}>
        {children}
      </Button>
    </Box>
  </Box>
>>>>>>> e64954c2318aaa8158b4f6e51780fcbe65ce95fd
);
