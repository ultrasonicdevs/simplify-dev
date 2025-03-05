import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from 'react';

type AsProp<C extends ElementType> = {
  as?: C;
};

type PolymorphicPropsWithoutRef<
  C extends ElementType,
  P = object,
> = PropsWithChildren<P> & AsProp<C> & ComponentPropsWithoutRef<C>;

export type PolymorphProps<
  C extends ElementType,
  Props = object,
> = PolymorphicPropsWithoutRef<C, Props> & {
  ref?: ComponentPropsWithRef<C>['ref'];
};

export type PolymorphicRef<C extends ElementType> =
  ComponentPropsWithRef<C>['ref'];
