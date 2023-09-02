import { createContext, FC, ReactNode, useId, useMemo, useState } from 'react';
import { TabsContext } from './Tabs.types';

export const TabListContext = createContext<TabsContext>({
  selectedTab: null,
  selectTab: (tab: string) => {
    console.log(`"${tab}" should not be used without TabsContext.Provider`);
  },
  tabsPrefix: ''
});

const TabListProvider: FC<{ children: ReactNode; defaultIndex: string }> = ({
  children,
  defaultIndex
}) => {
  const [selectedTab, selectTab] = useState(defaultIndex);
  const prefix = useId();

  const contextValue = useMemo(
    () => ({
      selectTab,
      selectedTab,
      tabsPrefix: prefix
    }),
    [selectedTab, prefix]
  );

  return <TabListContext.Provider value={contextValue}>{children}</TabListContext.Provider>;
};

export default TabListProvider;
