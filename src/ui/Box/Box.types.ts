import { PolymorphProps } from '../Polymorph/Polymorph.types';

export enum BoxAsVariants {
  article,
  section,
  header,
  footer,
  aside,
  form,
  main,
  div,
  nav,
  ul,
  ol,
  li,
}

export type BoxProps = PolymorphProps<keyof typeof BoxAsVariants>;
