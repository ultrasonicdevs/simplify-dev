import Polymorph from '../Polymorph/Polymorph';
import { boxVariants } from './Box.styles';
import { BoxProps } from './Box.types';
import { forwardRef } from 'react';

const Box = forwardRef<HTMLElement | HTMLDivElement, BoxProps>(
  ({ rounded, padding, className, children, as, ...props }, ref) => {
    return (
      <Polymorph
        className={boxVariants({ padding, rounded, className })}
        ref={ref}
        {...props}
        as={as}>
        {children}
      </Polymorph>
    );
  }
);
export default Box;
