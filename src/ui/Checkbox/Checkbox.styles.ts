import { tv } from 'tailwind-variants';

export const checkboxVariants = tv({
  slots: {
    base: 'group inline-flex items-center gap-2 cursor-pointer',
    input: ['sr-only peer', 'focus:outline-none'],
    box: [
      'relative flex items-center justify-center',
      'border-2 rounded transition-all duration-200',
      'w-checkbox-width h-checkbox-height shrink-0',
      'outline-offset-1 outline-transparent',

      'bg-checkbox-bg border-checkbox-border',
      'peer-hover:bg-checkbox-bg-hover peer-hover:border-checkbox-border-hover',
      'peer-active:bg-checkbox-bg-active',

      'peer-focus:outline peer-focus:outline-checkbox-outline',
      'peer-focus-visible:outline peer-focus-visible:outline-checkbox-outline',
      'peer-focus:border-checkbox-border-focus',

      'peer-checked:bg-checkbox-bg-checked peer-checked:border-checkbox-border-checked',
      'peer-checked:hover:bg-checkbox-bg-checked-hover',
      'peer-checked:active:bg-checkbox-bg-checked-active',
      'peer-checked:peer-focus:outline-checkbox-outline',
      'peer-checked:peer-focus-visible:outline-checkbox-outline',

      'peer-disabled:cursor-not-allowed',
      'peer-disabled:bg-checkbox-bg-disabled peer-disabled:border-checkbox-border-disabled',
      'peer-disabled:peer-checked:bg-checkbox-bg-disabled-checked',
      'peer-disabled:peer-checked:border-checkbox-border-disabled-checked',
      '*:opacity-0 *:stroke-checkbox-stroke *:transition-opacity duration-200',
      'peer-checked:*:opacity-100',
      'peer-disabled:peer-checked:*:stroke-checkbox-stroke-disabled',
    ],
    icon: 'w-full h-full',
    label: 'text-sm text-gray-800 peer-disabled:text-gray-400',
  },
  variants: {
    isError: {
      true: {
        box: [
          'border-checkbox-border-error bg-checkbox-bg-error',
          'peer-hover:border-checkbox-border-error-hover peer-hover:bg-checkbox-bg-error-hover',
          'peer-active:bg-checkbox-bg-error-active',
          'peer-focus:outline-checkbox-outline-error peer-focus-visible:outline-checkbox-outline-error',
          'peer-focus:border-checkbox-border-error-focus',
          'peer-checked:bg-checkbox-bg-error-checked peer-checked:border-checkbox-border-error-checked',
          'peer-checked:hover:bg-checkbox-bg-error-checked-hover',
          'peer-checked:active:bg-checkbox-bg-error-checked-active',
          'peer-checked:peer-focus:outline-checkbox-outline-error',
          'peer-checked:peer-focus-visible:outline-checkbox-outline-error',
          'peer-disabled:bg-checkbox-bg-error-disabled peer-disabled:border-checkbox-border-error-disabled',
          'peer-disabled:peer-checked:bg-checkbox-bg-error-disabled-checked',
          'peer-disabled:peer-checked:border-checkbox-border-error-disabled-checked',
          'peer-checked:*:stroke-checkbox-stroke-error',
          'peer-disabled:*:peer-checked:stroke-checkbox-stroke-error-disabled',
        ],
      },
      false: {},
    },
  },
  defaultVariants: {
    isError: false,
  },
});
