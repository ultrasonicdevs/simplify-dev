import { tv } from 'tailwind-variants';

export const buttonVariants = tv({
  base: [
    'inline-flex items-center justify-center',
    'text-base font-medium select-none',
    'transition-all duration-300',
    'cursor-pointer disabled:pointer-events-none',
    'no-underline',
  ],
  variants: {
    variant: {
      primary: '',
      secondary: '',
      reject: '',
      null: '',
    },
    size: {
      lg: '',
      md: '',
      sm: '',
      null: '',
    },
    buttonType: {
      button: ['rounded-md active:ring-2 focus:outline-2 outline-offset-1'],
      text: '',
      icon: 'rounded-md',
    },
  },
  compoundVariants: [
    // Размеры для buttonType === 'button'
    {
      buttonType: 'button',
      size: 'lg',
      class: 'h-14 px-8 text-lg',
    },
    {
      buttonType: 'button',
      size: 'md',
      class: 'h-12 px-6',
    },
    {
      buttonType: 'button',
      size: 'sm',
      class: 'h-10 px-4',
    },

    // Размеры для buttonType === 'text'
    {
      buttonType: 'text',
      size: 'lg',
      class: 'text-lg',
    },
    {
      buttonType: 'text',
      size: 'md',
      class: 'text-base',
    },
    {
      buttonType: 'text',
      size: 'sm',
      class: 'text-sm',
    },

    // Размеры для buttonType === 'icon'
    {
      buttonType: 'icon',
      size: 'lg',
      class: 'w-12 h-12',
    },
    {
      buttonType: 'icon',
      size: 'md',
      class: 'rounded-sm w-8 h-8',
    },
    {
      buttonType: 'icon',
      size: 'sm',
      class: 'rounded-sm w-6 h-6',
    },

    // Стили для buttonType === 'button' || 'icon' и variant
    {
      buttonType: ['button', 'icon'],
      variant: 'primary',
      class: [
        'bg-button-primary-bg-idle text-button-primary-text-idle',
        'hover:bg-button-primary-bg-hover hover:text-button-primary-text-hover',
        'active:bg-button-primary-bg-active active:text-button-primary-text-active',
        'focus:bg-button-primary-bg-focus focus:text-button-primary-text-focus outline-button-primary-ring-focus ring-button-primary-ring-focus',
        'disabled:bg-button-primary-bg-disabled disabled:text-button-primary-text-disabled',
      ],
    },
    {
      buttonType: ['button', 'icon'],
      variant: 'secondary',
      class: [
        'bg-button-secondary-bg-idle text-button-secondary-text-idle',
        'hover:bg-button-secondary-bg-hover hover:text-button-secondary-text-hover',
        'active:bg-button-secondary-bg-active active:text-button-secondary-text-active',
        'focus:bg-button-secondary-bg-focus focus:text-button-secondary-text-focus outline-button-secondary-ring-focus ring-button-secondary-ring-focus',
        'disabled:bg-button-secondary-bg-disabled disabled:text-button-secondary-text-disabled',
      ],
    },
    {
      buttonType: ['button', 'icon'],
      variant: 'reject',
      class: [
        'bg-button-reject-bg-idle text-button-reject-text-idle',
        'hover:bg-button-reject-bg-hover hover:text-button-reject-text-hover',
        'active:bg-button-reject-bg-active active:text-button-reject-text-active',
        'focus:bg-button-reject-bg-focus focus:text-button-reject-text-focus outline-button-reject-ring-focus ring-button-reject-ring-focus',
        'disabled:bg-button-reject-bg-disabled disabled:text-button-reject-text-disabled',
      ],
    },

    // Стили для buttonType === 'text' и variant
    {
      buttonType: 'text',
      variant: 'primary',
      class: [
        'text-button-primary-bg-idle',
        'hover:text-button-primary-bg-hover hover:underline',
        'active:text-button-primary-bg-active active:opacity-80',
        'disabled:text-button-primary-bg-disabled disabled:opacity-50',
      ],
    },
    {
      buttonType: 'text',
      variant: 'secondary',
      class: [
        'text-button-secondary-bg-idle',
        'hover:text-button-secondary-bg-hover hover:underline',
        'active:text-button-secondary-bg-active active:opacity-80',
        'disabled:text-button-secondary-bg-disabled disabled:opacity-50',
      ],
    },
    {
      buttonType: 'text',
      variant: 'reject',
      class: [
        'text-button-reject-bg-idle',
        'hover:text-button-reject-bg-hover hover:underline',
        'active:text-button-reject-bg-active active:opacity-80',
        'disabled:text-button-reject-bg-disabled disabled:opacity-50',
      ],
    },
  ],
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    buttonType: 'button',
  },
});
