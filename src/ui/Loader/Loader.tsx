import { loaderVariants } from './Loader.style';
import Polymorph from 'ui/Polymorph/Polymorph';
import { LoaderProps } from './Loader.types';
import loaderIcon from './loader.svg';
import Box from 'ui/Box/Box';
import { FC } from 'react';

const Loader: FC<LoaderProps> = ({ size, className, ...props }) => {
  return (
    <Box className={loaderVariants({ size, className })} {...props}>
      <Polymorph as='img' src={loaderIcon} alt=' ' className='w-full h-full' />
    </Box>
  );
};

export default Loader;
