import { cva } from 'class-variance-authority';

import { cn } from '@utils';

export const buttonVariants = cva(
  [
    'flex items-center justify-center',
    'text-base font-semibold select-none',
    'transition-all duration-300',
    'outline-none',
    'w-full',
    'cursor-pointer disabled:pointer-events-none',
  ],
  {
    variants: {
      variant: {
        primary: cn(
          'bg-btn-primary text-btn-primary',
          'hover:bg-btn-primary-hover hover:text-btn-primary-hover',
          'active:bg-btn-primary-active active:text-btn-primary-active',
          'focus:bg-btn-primary-focus focus:text-btn-primary-focus focus:outline outline-offset-2 outline-3 focus:outline-btn-primary-focus',
          'disabled:bg-btn-primary-disabled disabled:text-btn-primary-disabled '
        ),
        secondary: cn(
          'bg-btn-secondary text-btn-secondary',
          'hover:bg-btn-secondary-hover hover:text-btn-secondary-hover',
          'active:bg-btn-secondary-active active:text-btn-secondary-active',
          'focus:bg-btn-secondary-focus focus:text-btn-secondary-focus focus:outline outline-offset-2 outline-3 focus:outline-btn-secondary-focus',
          'disabled:bg-btn-secondary-disabled disabled:text-btn-secondary-disabled '
        ),
        tertiary: cn(
          'bg-btn-bg-tertiary text-btn-tertiary',
          'hover:bg-btn-bg-tertiary-hover hover:text-btn-tertiary-hover',
          'focus:bg-btn-bg-tertiary-hover focus:text-btn-tertiary-hover',
          'disabled:bg-btn-secondary-disabled disabled:text-btn-secondary-disabled '
        ),
        reject: cn(
          'bg-btn-reject text-btn-reject',
          'hover:bg-btn-reject-hover hover:text-btn-reject-hover',
          'active:bg-btn-reject-active active:text-btn-reject-active',
          'focus:bg-btn-reject-focus focus:text-btn-reject-focus focus:outline outline-offset-2 outline-3 focus:outline-btn-reject-focus',
          'disabled:bg-btn-reject-disabled disabled:text-btn-reject-disabled '
        ),
      },
      size: {
        xs: 'h-[30px] rounded-[30px] px-5',
        sm: 'h-[40px] rounded-[16px] px-5',
        md: 'h-[50px] rounded-[16px] px-5',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export const textButtonVariants = cva(
  [
    'flex items-center gap-2 rounded-md px-2',
    'font-medium',
    'cursor-pointer disabled:pointer-events-none',
  ],
  {
    variants: {
      variant: {
        primary: [
          'text-btn-text-primary',
          'hover:text-btn-text-primary-hover',
          'disabled:opacity-50',
        ],
        secondary: [
          'text-btn-text-secondary',
          'hover:text-btn-text-secondary-hover hover:bg-btn-text-bg-secondary',
          'disabled:opacity-50',
        ],
        tertiary: [
          'text-btn-text-tertiary',
          'hover:text-btn-text-tertiary-hover',
          'disabled:opacity-50',
        ],
        reject: [
          'text-btn-text-reject',
          'hover:text-btn-text-reject-hover',
          'disabled:opacity-50',
        ],
      },
      size: {
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);
