import { ComponentProps, ReactElement } from 'react';

type CloneElement = (element: ReactElement, props: ComponentProps<any>) => ReactElement;

const clone: CloneElement = (element, props) => {
  return { ...element, props: { ...element.props, ...props } };
};

export default clone;
