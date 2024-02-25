import { Polymorph } from '@ui/Polymorph';
import { forwardRef } from 'react';
import { BoxProps } from './Box.types';

export const Box = forwardRef<HTMLElement | HTMLDivElement, BoxProps>(
  ({ className, children, as, ...props }, ref) => {
    return (
      <Polymorph className={className} ref={ref} {...props} as={as}>
        {children}
      </Polymorph>
    );
  }
);
