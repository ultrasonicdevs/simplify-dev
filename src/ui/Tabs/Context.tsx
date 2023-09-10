import { TabsContext } from './Tabs.types';
import { createContext } from 'react';

export const TabListContext = createContext<TabsContext>({
  selectedTab: null,
  selectTab: (tab: string) => {
    console.log(`"${tab}" should not be used without TabsContext.Provider`);
  },
  tabsPrefix: ''
});
