import { Polymorph } from '@ui/Polymorph';

import { BoxProps } from './Box.types';

export const Box = ({ className, children, as, ...props }: BoxProps) => {
  return (
    <Polymorph className={className} {...props} as={as}>
      {children}
    </Polymorph>
  );
};
