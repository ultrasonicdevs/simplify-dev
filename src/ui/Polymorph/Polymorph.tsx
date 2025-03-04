import { ElementType } from 'react';

import { PolymorphProps } from './Polymorph.types';

export const Polymorph = <T extends ElementType>({
  as,
  children,
  ...otherProps
}: PolymorphProps<T>) => {
  const PolymorphElement = as || ('div' as ElementType);

  return <PolymorphElement {...otherProps}>{children}</PolymorphElement>;
};
