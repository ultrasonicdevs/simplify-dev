import { PolymorphProps } from '../Polymorph/Polymorph.types';

export enum buttonAsVariants {
  button,
  a,
}

export type ButtonProps = PolymorphProps<keyof typeof buttonAsVariants> & {
  variant?: 'primary' | 'secondary' | 'reject' | 'null';
  size?: 'sm' | 'md' | 'null';
  buttonType?: 'button' | 'text';
};
