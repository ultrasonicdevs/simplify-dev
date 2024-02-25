import { ElementType, forwardRef } from 'react';
import { PolymorphProps, PolymorphicRef } from './Polymorph.types';

export const Polymorph = forwardRef(
  <T extends ElementType>(props: PolymorphProps<T>, ref: PolymorphicRef<T>) => {
    const { as, children, ...otherProps } = props;
    const PolymorphElement = as || ('div' as ElementType);

    return (
      <PolymorphElement ref={ref} {...otherProps}>
        {children}
      </PolymorphElement>
    );
  }
);
