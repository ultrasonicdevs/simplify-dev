import { ElementType } from 'react';

import { PolymorphProps } from './Polymorph.types';

export const Polymorph = <T extends ElementType>(props: PolymorphProps<T>) => {
  const { as, children, ...otherProps } = props;
  const PolymorphElement = as || ('div' as ElementType);

  return <PolymorphElement {...otherProps}>{children}</PolymorphElement>;
};
