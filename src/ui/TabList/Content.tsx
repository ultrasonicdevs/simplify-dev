import { FC, ReactNode, useContext } from 'react';
import { Box, BoxProps } from '../Box';
import { TabListContext } from './lib/tabContext';

export type TabContentProps = BoxProps & { tab: string; children: ReactNode };

export const TabContent: FC<TabContentProps> = ({ children, tab, ...props }) => {
  const { selectedTab, tabsPrefix } = useContext(TabListContext);

  if (selectedTab !== tab) return null;

  return (
    <Box {...props} role='tab-panel' tabIndex={0} id={`${tabsPrefix}-tab-panel-${tab}`}>
      {children}
    </Box>
  );
};

export default TabContent;
