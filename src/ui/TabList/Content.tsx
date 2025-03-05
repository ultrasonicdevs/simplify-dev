import { PolymorphProps } from '@ui/Polymorph';
import { FC, ReactNode, useContext } from 'react';
import { TabListContext } from './lib/tabContext';

export type TabContentProps = PolymorphProps<'div'> & { tab: string; children: ReactNode };

export const TabContent: FC<TabContentProps> = ({ children, tab, ...props }) => {
  const { selectedTab, tabsPrefix } = useContext(TabListContext);

  if (selectedTab !== tab) return null;

  return (
    <div {...props} role='tab-panel' tabIndex={0} id={`${tabsPrefix}-tab-panel-${tab}`}>
      {children}
    </div>
  );
};

export default TabContent;
