import { PolymorphProps } from '../Polymorph/Polymorph.types';

export enum InputTypeVariants {
  'datetime-local',
  password,
  number,
  email,
  month,
  week,
  date,
  text,
  time,
  tel,
}

export type InputProps = PolymorphProps<'input'> & {
  type?: keyof typeof InputTypeVariants;
  children?: never;
};
