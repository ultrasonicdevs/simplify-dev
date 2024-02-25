import { cn } from '@utils';
import { cva } from 'class-variance-authority';

export const checkboxVariants = (disabled: boolean, checked: boolean) =>
  cva(
    cn(
      'flex justify-center items-center',
      'cursor-pointer',
      'w-cb h-cb',
      'rounded-md border-2',
      'duration-300',
      'select-none',
      'focus:outline outline-offset-2 outline-3',
      disabled && 'pointer-events-none'
    ),
    {
      variants: {
        variant: {
          default: cn(
            'border-cb bg-cb hover:border-cb-hover hover:bg-cb-hover active:border-cb-active active:bg-cb-active focus:border-cb-hover focus:bg-cb-focus outline-cb-checked',
            !disabled &&
              checked &&
              'border-cb-checked bg-cb-checked hover:border-cb-hover-checked hover:bg-cb-hover-checked active:border-cb-active-checked active:bg-cb-active-checked focus:border-cb-hover-checked focus:bg-cb-focus-checked outline-cb-checked',
            disabled && !checked && 'border-cb-disabled bg-cb-disabled',
            disabled && checked && 'border-cb-disabled-checked bg-cb-disabled-checked'
          ),
          error: cn(
            'border-cb-error bg-cb-error',
            disabled && !checked && 'border-cb-disabled bg-cb-disabled',
            !disabled && checked && 'border-cb-checked bg-cb-checked',
            disabled && checked && 'border-cb-checked-disabled bg-cb-checked-disabled'
          )
        }
      },
      defaultVariants: {
        variant: 'default'
      }
    }
  );

export const checkboxToggleVariants = cva(['w-cb h-cb'], {
  variants: {
    disabled: {
      false: cn('stroke-cb'),
      true: cn('stroke-cb-disabled')
    },
    checked: {
      true: cn('opacity-1'),
      false: cn('opacity-0')
    }
  },
  defaultVariants: {
    disabled: false,
    checked: false
  }
});
