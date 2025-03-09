import { useAccurateContext } from '@hooks';
import { PolymorphProps } from '@ui/Polymorph';

import { TabListContext } from './Provider';

export type TabContentProps = PolymorphProps<'div'> & {
  tab: string;
};

export const TabContent = ({ children, tab, ...props }: TabContentProps) => {
  const { selectedTab, tabsPrefix } = useAccurateContext(TabListContext);

  if (selectedTab !== tab) return null;

  return (
    <div {...props} id={`${tabsPrefix}-tab-panel-${tab}`}>
      {children}
    </div>
  );
};

export default TabContent;
