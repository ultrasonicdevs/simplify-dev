import { forwardRef } from 'react';

import { Polymorph } from '@ui/Polymorph';
import { cn } from '@utils';
import { InputProps } from './Input.types';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', className, ...props }, ref) => {
    return (
      <Polymorph
        ref={ref}
        as='input'
        className={cn('outline-none', className)}
        type={type}
        {...props}
      />
    );
  }
);
