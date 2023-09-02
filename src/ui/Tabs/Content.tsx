import { TabContentProps } from './Tabs.types';
import { TabListContext } from './Provider';
import { FC, useContext } from 'react';
import Box from '../Box/Box';

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
