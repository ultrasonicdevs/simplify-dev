import { cva } from 'class-variance-authority'

export const loaderVariants = cva('animate-spin', {
  variants: {
    size: {
      sm: 'w-[50px] h-[50px]',
      xs: 'w-[25px] h-[25px]',
      md: 'w-[75px] h-[75px]',
      lg: 'w-[100px] h-[100px]',
    },
  },
  defaultVariants: {
    size: 'lg',
  },
})
