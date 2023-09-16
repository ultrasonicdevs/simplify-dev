import { PolymorphProps } from '../Polymorph/Polymorph.types';
import { VariantProps } from 'class-variance-authority';
import { loaderVariants } from './Loader.style';

export type LoaderProps = VariantProps<typeof loaderVariants> &
  PolymorphProps<'div'> & {
    rounded: never;
    padding: never;
  };
