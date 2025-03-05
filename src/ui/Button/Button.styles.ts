import { cva } from 'class-variance-authority';

import { cn } from '@utils';

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center',
    'text-base font-medium select-none',
    'transition-all duration-300',
<<<<<<< HEAD
    'cursor-pointer disabled:pointer-events-none',
    'no-underline'
=======
    'outline-none',
    'w-full',
    'cursor-pointer disabled:pointer-events-none',
>>>>>>> e64954c2318aaa8158b4f6e51780fcbe65ce95fd
  ],
  {
    variants: {
      variant: {
        primary: cn(
          'bg-button-primary-bg-idle text-button-primary-text-idle',
          'hover:bg-button-primary-bg-hover hover:text-button-primary-text-hover',
          'active:bg-button-primary-bg-active active:text-button-primary-text-active',
          'focus:outline focus:ring-2 focus:ring-button-primary-ring-focus',
          'disabled:bg-button-primary-bg-disabled disabled:text-button-primary-text-disabled'
        ),
        secondary: cn(
          'bg-button-secondary-bg-idle text-button-secondary-text-idle',
          'hover:bg-button-secondary-bg-hover hover:text-button-secondary-text-hover',
          'active:bg-button-secondary-bg-active active:text-button-secondary-text-active',
          'focus:outline focus:ring-2 focus:ring-button-secondary-ring-focus',
          'disabled:bg-button-secondary-bg-disabled disabled:text-button-secondary-text-disabled'
        ),
        reject: cn(
<<<<<<< HEAD
          'bg-button-reject-bg-idle text-button-reject-text-idle',
          'hover:bg-button-reject-bg-hover hover:text-button-reject-text-hover',
          'active:bg-button-reject-bg-active active:text-button-reject-text-active',
          'focus:outline focus:ring-2 focus:ring-button-reject-ring-focus',
          'disabled:bg-button-reject-bg-disabled disabled:text-button-reject-text-disabled'
        ),
        null: ''
      },
      size: {
        md: 'rounded-md leading-12 h-12 px-6',
        sm: 'rounded-md leading-10 h-10 px-4',
        null: ''
      }
=======
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
>>>>>>> e64954c2318aaa8158b4f6e51780fcbe65ce95fd
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export const textButtonVariants = cva(
  [
<<<<<<< HEAD
    'inline-flex gap-2 px-2',
    'font-medium transition-colors duration-300',
    'cursor-pointer disabled:pointer-events-none',
    'no-underline'
=======
    'flex items-center gap-2 rounded-md px-2',
    'font-medium',
    'cursor-pointer disabled:pointer-events-none',
>>>>>>> e64954c2318aaa8158b4f6e51780fcbe65ce95fd
  ],
  {
    variants: {
      variant: {
<<<<<<< HEAD
        primary: cn(
          'text-button-primary-bg-idle',
          'hover:text-button-primary-bg-hover hover:underline',
          'active:text-button-primary-bg-active active:opacity-80',
          'focus:outline focus:ring-2 focus:ring-button-primary-ring-focus',
          'disabled:text-button-primary-bg-disabled disabled:opacity-50'
        ),
        secondary: cn(
          'text-button-secondary-bg-idle',
          'hover:text-button-secondary-bg-hover hover:underline',
          'active:text-button-secondary-bg-active active:opacity-80',
          'focus:outline focus:ring-2 focus:ring-button-secondary-ring-focus',
          'disabled:text-button-secondary-bg-disabled disabled:opacity-50'
        ),
        reject: cn(
          'text-button-reject-bg-idle',
          'hover:text-button-reject-bg-hover hover:underline',
          'active:text-button-reject-bg-active active:opacity-80',
          'focus:outline focus:ring-2 focus:ring-button-reject-ring-focus',
          'disabled:text-button-reject-bg-disabled disabled:opacity-50'
        ),
        null: ''
=======
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
>>>>>>> e64954c2318aaa8158b4f6e51780fcbe65ce95fd
      },
      size: {
        sm: 'text-sm',
        md: 'text-base',
<<<<<<< HEAD
        null: ''
      }
=======
      },
>>>>>>> e64954c2318aaa8158b4f6e51780fcbe65ce95fd
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);
