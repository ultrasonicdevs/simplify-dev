import { cva } from 'class-variance-authority';
import { cn } from 'utils';

export const checkboxVariants = cva(
  [
    'flex justify-center items-center',
    'cursor-pointer',
    'w-cb h-cb',
    'border-2',
    'duration-300',
    'select-none',
    'p-[3px]'
  ],
  {
    variants: {
      disabled: {
        true: cn(
          'border-cb-border-disabled hover:border-cb-border-disabled-hover',
          'bg-cb-bg-disabled'
        ),
        false: cn('border-cb-border hover:border-cb-border-hover', 'bg-cb-bg')
      }
    },
    defaultVariants: {
      disabled: false
    }
  }
);

export const checkboxToggleVariants = cva(['w-full h-full'], {
  variants: {
    disabled: {
      false: cn('grayscale-0'),
      true: cn('grayscale')
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
