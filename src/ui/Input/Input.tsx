import { Polymorph } from '@ui/Polymorph';
import { cn } from '@utils';

import { InputProps } from './Input.types';

export const Input = ({ type = 'text', className, ...props }: InputProps) => {
  return (
    <Polymorph
      as="input"
      className={cn('outline-none', className)}
      type={type}
      {...props}
    />
  );
};
