import { cva } from 'class-variance-authority';
import { cn } from 'lib';

export const buttonVariants = (invertedOnHover: boolean) =>
  cva(
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
            'disabled:bg-btn-bg-col-primary-disabled disabled:text-btn-col-primary-disabled disabled:pointer-events-none',
            {
              'hover:bg-btn-col-primary hover:text-btn-bg-col-primary': invertedOnHover
            }
          ),
          secondary: cn(
            'bg-btn-bg-col-secondary text-btn-col-secondary',
            'hover:bg-btn-bg-col-secondary-hover hover:text-btn-col-secondary-hover',
            {
              'hover:bg-btn-col-secondary-hover hover:text-btn-bg-col-secondary-hover':
                invertedOnHover
            }
          ),
          tertiary: cn(
            'bg-btn-bg-col-tertiary text-btn-col-tertiary',
            'hover:bg-btn-bg-col-tertiary-hover hover:text-btn-col-tertiary-hover',
            {
              'hover:bg-btn-col-tertiary-hover hover:text-btn-bg-col-tertiary-hover':
                invertedOnHover
            }
          ),
          reject: cn(
            'bg-btn-bg-col-reject text-btn-col-reject',
            'hover:bg-btn-bg-col-reject-hover hover:text-btn-col-reject-hover',
            {
              'hover:bg-btn-col-reject-hover hover:text-btn-bg-col-reject-hover': invertedOnHover
            }
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
