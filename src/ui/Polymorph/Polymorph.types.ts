import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  PropsWithChildren
} from 'react';

type AsProp<C extends ElementType> = {
  as?: C;
};

type PolymorphicPropsWithoutRef<C extends ElementType, P = {}> = PropsWithChildren<P> &
  AsProp<C> &
  ComponentPropsWithoutRef<C>;

type PolymorphicComponentPropWithRef<
  C extends ElementType,
  Props = {}
> = PolymorphicPropsWithoutRef<C, Props> & { ref?: PolymorphicRef<C> };

export type PolymorphProps<C extends ElementType, Props = {}> =
  | PolymorphicPropsWithoutRef<C>
  | PolymorphicComponentPropWithRef<C, Props>;

// This is the type for the "ref" only
export type PolymorphicRef<C extends ElementType> = ComponentPropsWithRef<C>['ref'];
