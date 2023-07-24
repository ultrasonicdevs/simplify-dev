import { cva } from 'class-variance-authority'
import { cn } from 'lib'

export const CheckboxVariants = cva(['cursor-pointer', 'w-cb h-cb', 'border-2', 'duration-300'], {
  variants: {
    disabled: {
      true: cn(
        'border-cb-border-disabled hover:border-cb-border-disabled-hover',
        'bg-cb-bg-disabled',
      ),
      false: cn('border-cb-border hover:border-cb-border-hover', 'bg-cb-bg'),
    },
  },
  defaultVariants: {
    disabled: false,
  },
})

export const CheckboxToggleVariants = cva(
  ['w-full h-full', 'bg-center bg-no-repeat bg-cb-checked-img'],
  {
    variants: {
      disabled: {
        false: cn('grayscale-0'),
        true: cn('grayscale'),
      },
      checked: {
        true: cn('opacity-1'),
        false: cn('opacity-0'),
      },
    },
    defaultVariants: {
      disabled: false,
      checked: false,
    },
  },
)
