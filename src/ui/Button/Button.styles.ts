import { cva } from 'class-variance-authority';
import { cn } from 'utils';

export const buttonVariants = cva(
  [
    'flex items-center justify-center',
    'text-base font-semibold select-none',
    'transition-all duration-300',
    'w-full',
    'outline-none',
    'cursor-pointer'
  ],
  {
    variants: {
      variant: {
        primary: cn(
          'bg-btn-bg-col-primary text-btn-col-primary',
          'hover:bg-btn-bg-col-primary-hover hover:text-btn-col-primary-hover',
          'active:bg-btn-bg-col-primary-active active:text-btn-col-primary-active',
          'focus:bg-btn-bg-col-primary-focus focus:text-btn-col-primary-focus focus:outline outline-offset-2 outline-3 focus:outline-btn-bg-col-primary-focus',
          'disabled:bg-btn-bg-col-disabled disabled:text-btn-col-disabled disabled:pointer-events-none'
        ),
        secondary: cn(
          'bg-btn-bg-col-secondary text-btn-col-secondary',
          'hover:bg-btn-bg-col-secondary-hover hover:text-btn-col-secondary-hover',
          'focus:bg-btn-bg-col-secondary-hover focus:text-btn-col-secondary-hover',
          'disabled:bg-btn-bg-col-disabled disabled:text-btn-col-disabled disabled:pointer-events-none'
        ),
        tertiary: cn(
          'bg-btn-bg-col-tertiary text-btn-col-tertiary',
          'hover:bg-btn-bg-col-tertiary-hover hover:text-btn-col-tertiary-hover',
          'focus:bg-btn-bg-col-tertiary-hover focus:text-btn-col-tertiary-hover',
          'disabled:bg-btn-bg-col-disabled disabled:text-btn-col-disabled disabled:pointer-events-none'
        ),
        reject: cn(
          'bg-btn-bg-col-reject text-btn-col-reject',
          'hover:bg-btn-bg-col-reject-hover hover:text-btn-col-reject-hover',
          'focus:bg-btn-bg-col-reject-hover focus:text-btn-col-reject-hover',
          'disabled:bg-btn-bg-col-disabled disabled:text-btn-col-disabled disabled:pointer-events-none'
        )
      },
      size: {
        xs: 'h-[30px] rounded-[30px] px-5',
        sm: 'h-[40px] rounded-[16px] px-5',
        md: 'h-[50px] rounded-[16px] px-5'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  }
);

export const textButtonVariants = cva(
  ['flex items-center gap-2 rounded-md px-2', 'font-medium', 'cursor-pointer'],
  {
    variants: {
      variant: {
        primary: [
          'text-btn-text-col-primary',
          'hover:text-btn-text-col-primary-hover',
          'disabled:opacity-50 disabled:pointer-events-none'
        ],
        secondary: [
          'text-btn-text-col-secondary',
          'hover:text-btn-text-col-secondary-hover hover:bg-btn-text-bg-col-secondary',
          'disabled:opacity-50 disabled:pointer-events-none'
        ],
        tertiary: [
          'text-btn-text-col-tertiary',
          'hover:text-btn-text-col-tertiary-hover',
          'disabled:opacity-50 disabled:pointer-events-none'
        ],
        reject: [
          'text-btn-text-col-reject',
          'hover:text-btn-text-col-reject-hover',
          'disabled:opacity-50 disabled:pointer-events-none'
        ]
      },
      size: {
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  }
);
