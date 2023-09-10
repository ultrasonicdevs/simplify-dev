import { BoxProps } from '../Box/Box.types';
import { ReactNode } from 'react';

export type TabsContext = {
  selectTab: (tab: string) => void;
  selectedTab: string | null;
  tabsPrefix: string;
};

export type TabListProps = {
  'aria-label': string;
  selectedVariant?: string;
  selectedClassName?: string;
  defaultIndex: string;
} & BoxProps;

export type TabContentProps = BoxProps & { tab: string; children: ReactNode };
