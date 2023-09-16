import { forwardRef } from 'react';

import Polymorph from '../Polymorph/Polymorph';
import { InputProps } from './Input.types';

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', className, ...props }, ref) => {
    return (
      <Polymorph
        ref={ref}
        as='input'
        className={className ? 'outline-0 ' + className : className}
        type={type}
        {...props}
      />
    );
  }
);

export default Input;
