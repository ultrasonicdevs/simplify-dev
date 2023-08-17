import { VariantProps } from 'class-variance-authority';
import { PolymorphProps } from '../Polymorph/Polymorph';
import { loaderVariants } from './Loader.style';
import Polymorph from 'ui/Polymorph/Polymorph';
import loaderIcon from './loader.svg';
import Box from 'ui/Box/Box';
import { FC } from 'react';

export type LoaderProps = VariantProps<typeof loaderVariants> &
  PolymorphProps<'div'> & {
    rounded: never;
    padding: never;
  };

const Loader: FC<LoaderProps> = ({ size, className, ...props }) => {
  return (
    <Box className={loaderVariants({ size, className })} {...props}>
      <Polymorph as='img' src={loaderIcon} alt=' ' className='w-full h-full' />
    </Box>
  );
};

export default Loader;
