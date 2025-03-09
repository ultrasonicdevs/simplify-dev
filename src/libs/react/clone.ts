import { JSXElementConstructor, ReactElement } from 'react';

export const clone = <P = unknown>(
  element: ReactElement<P, JSXElementConstructor<P>>,
  props: Partial<P>
): ReactElement<P, JSXElementConstructor<P>> => {
  return {
    ...element,
    props: {
      ...element.props,
      ...props,
    },
  };
};
