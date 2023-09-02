import { forwardRef } from 'react';

import Polymorph from '../Polymorph/Polymorph';
import { InputProps } from './Input.types';

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { type = 'text', ...otherProps } = props;

  return <Polymorph ref={ref} as='input' type={type} {...otherProps} />;
});

export default Input;
