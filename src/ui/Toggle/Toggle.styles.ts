import { cva } from 'class-variance-authority';
import { cn } from 'lib';

export const toggleVariants = (disabled: boolean) =>
  cva(['cursor-pointer', 'w-toggle h-toggle', 'border-2', 'duration-300', 'relative'], {
    variants: {
      checked: {
        true: cn('border-toggle-border-checked', 'bg-toggle-bg-checked', 'justify-end', {
          'border-toggle-border-checked-disabled  bg-toggle-bg-checked-disabled': disabled
        }),
        false: cn('border-toggle-border', 'bg-toggle-bg', 'justify-start', {
          'border-toggle-border-disabled  bg-toggle-bg-disabled': disabled
        })
      }
    },
    defaultVariants: {
      checked: false
    }
  });

export const toggleHandleVariants = (disabled: boolean) =>
  cva(
    [
      'w-toggle-handle h-toggle-handle',
      'self-center',
      'duration-300',
      'mx-toggle-handle',
      'absolute top-1/2 -translate-y-1/2'
    ],
    {
      variants: {
        checked: {
          true: cn('bg-toggle-checked', 'left-[15px]', {
            'bg-toggle-checked-disabled': disabled
          }),
          false: cn('bg-toggle', 'left-0', {
            'bg-toggle-disabled': disabled
          })
        }
      },
      defaultVariants: {
        checked: false
      }
    }
  );
