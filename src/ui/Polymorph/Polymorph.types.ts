import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from 'react';

type AsProp<Tag extends ElementType> = {
  as?: Tag;
};

type PolymorphicPropsWithoutRef<
  Tag extends ElementType,
  P = object,
> = PropsWithChildren<P> & AsProp<Tag> & ComponentPropsWithoutRef<Tag>;

export type PolymorphProps<
  Tag extends ElementType,
  Props = object,
> = PolymorphicPropsWithoutRef<Tag, Props> & {
  ref?: ComponentPropsWithRef<Tag>['ref'];
};

export type PolymorphicRef<C extends ElementType> =
  ComponentPropsWithRef<C>['ref'];
