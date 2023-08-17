import Polymorph, { PolymorphProps } from '../Polymorph/Polymorph';
import { forwardRef } from 'react';

export enum TypographyAsVariants {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span,
  label
}

export type TypographyProps = PolymorphProps<keyof typeof TypographyAsVariants>;

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
