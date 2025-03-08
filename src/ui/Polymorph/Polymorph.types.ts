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

type PolymorphicComponentPropWithRef<
  C extends ElementType,
  Props = object,
> = PolymorphicPropsWithoutRef<C, Props> & { ref?: PolymorphicRef<C> };

export type PolymorphProps<C extends ElementType, Props = object> =
  | PolymorphicPropsWithoutRef<C>
  | PolymorphicComponentPropWithRef<C, Props>;

export type PolymorphicRef<C extends ElementType> =
  ComponentPropsWithRef<C>['ref'];
