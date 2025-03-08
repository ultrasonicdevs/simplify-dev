import { PolymorphProps } from '../Polymorph/Polymorph.types';

export enum TypographyAsVariants {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span,
  label,
}

export type TypographyProps = PolymorphProps<keyof typeof TypographyAsVariants>;
