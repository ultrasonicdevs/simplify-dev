import { TypographyProps } from './Typpgraphy.types';
import Polymorph from '../Polymorph/Polymorph';
import { forwardRef } from 'react';

const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ as = 'p', children, ...props }, ref) => {
    return (
      <Polymorph as={as} ref={ref} {...props}>
        {children}
      </Polymorph>
    );
  }
);

export default Typography;
