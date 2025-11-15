import { cva } from 'class-variance-authority';

import { cn } from '@utils';

export const buttonVariants = cva(
  [
    'flex items-center justify-center',
    'text-base font-semibold select-none',
    'transition-all duration-300',
    'w-auto outline-none',
    'cursor-pointer disabled:pointer-events-none',
  ],
  {
    variants: {
      variant: {
        primary: '',
        secondary: '',
        tertiary: '',
        reject: '',
      },
      size: {
        xs: 'h-[30px] rounded-[30px] px-5',
        sm: 'h-[40px] rounded-[16px] px-5',
        md: 'h-[50px] rounded-[16px] px-5',
      },
      type: {
        button: '',
        text: [
          'flex items-center gap-2 rounded-md px-2',
          'font-medium',
          'w-auto',
        ],
      },
    },
    compoundVariants: [
      {
        type: 'button',
        variant: 'primary',
        class: cn(
          'bg-btn-primary text-btn-primary',
          'hover:bg-btn-primary-hover hover:text-btn-primary-hover',
          'active:bg-btn-primary-active active:text-btn-primary-active',
          'focus:bg-btn-primary-focus focus:text-btn-primary-focus focus:outline outline-offset-2 outline-3 focus:outline-btn-primary-focus',
          'disabled:bg-btn-primary-disabled disabled:text-btn-primary-disabled '
        ),
      },
      {
        type: 'button',
        variant: 'secondary',
        class: cn(
          'bg-btn-secondary text-btn-secondary',
          'hover:bg-btn-secondary-hover hover:text-btn-secondary-hover',
          'active:bg-btn-secondary-active active:text-btn-secondary-active',
          'focus:bg-btn-secondary-focus focus:text-btn-secondary-focus focus:outline outline-offset-2 outline-3 focus:outline-btn-secondary-focus',
          'disabled:bg-btn-secondary-disabled disabled:text-btn-secondary-disabled '
        ),
      },
      {
        type: 'button',
        variant: 'tertiary',
        class: cn(
          'bg-btn-bg-tertiary text-btn-tertiary',
          'hover:bg-btn-bg-tertiary-hover hover:text-btn-tertiary-hover',
          'focus:bg-btn-bg-tertiary-hover focus:text-btn-tertiary-hover',
          'disabled:bg-btn-secondary-disabled disabled:text-btn-secondary-disabled '
        ),
      },
      {
        type: 'button',
        variant: 'reject',
        class: cn(
          'bg-btn-reject text-btn-reject',
          'hover:bg-btn-reject-hover hover:text-btn-reject-hover',
          'active:bg-btn-reject-active active:text-btn-reject-active',
          'focus:bg-btn-reject-focus focus:text-btn-reject-focus focus:outline outline-offset-2 outline-3 focus:outline-btn-reject-focus',
          'disabled:bg-btn-reject-disabled disabled:text-btn-reject-disabled '
        ),
      },

      // Compound variants для текстовой кнопки
      {
        type: 'text',
        variant: 'primary',
        class: [
          'text-btn-text-primary',
          'hover:text-btn-text-primary-hover',
          'disabled:opacity-50',
        ],
      },
      {
        type: 'text',
        variant: 'secondary',
        class: [
          'text-btn-text-secondary',
          'hover:text-btn-text-secondary-hover hover:bg-btn-text-bg-secondary',
          'disabled:opacity-50',
        ],
      },
      {
        type: 'text',
        variant: 'tertiary',
        class: [
          'text-btn-text-tertiary',
          'hover:text-btn-text-tertiary-hover',
          'disabled:opacity-50',
        ],
      },
      {
        type: 'text',
        variant: 'reject',
        class: [
          'text-btn-text-reject',
          'hover:text-btn-text-reject-hover',
          'disabled:opacity-50',
        ],
      },
      // Compound variants для размеров текстовой кнопки
      {
        type: 'text',
        size: 'xs',
        class: 'text-xs',
      },
      {
        type: 'text',
        size: 'sm',
        class: 'text-sm',
      },
      {
        type: 'text',
        size: 'md',
        class: 'text-base',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      type: 'button',
    },
  }
);
