import { Polymorph } from '@ui/Polymorph';

import { TypographyProps } from './Typpgraphy.types';

export const Typography = ({
  as = 'p',
  children,
  ...props
}: TypographyProps) => {
  return (
    <Polymorph as={as} {...props}>
      {children}
    </Polymorph>
  );
};
