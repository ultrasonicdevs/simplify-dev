import { BoxProps } from '../../Box/Box.types';
import { ReactNode } from 'react';

export type TabListProps = {
  'aria-label'?: string;
  selectedVariant?: string;
  selectedClassName?: string;
} & BoxProps;

export type TabContentProps = BoxProps & { tab: string; children: ReactNode };
