import { Polymorph } from '@ui/Polymorph';
import { forwardRef } from 'react';
import { TypographyProps } from './Typpgraphy.types';

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ as = 'p', children, ...props }, ref) => {
    return (
      <Polymorph as={as} ref={ref} {...props}>
        {children}
      </Polymorph>
    );
  }
);
