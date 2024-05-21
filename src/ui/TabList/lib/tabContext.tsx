import { createContext } from 'react';

type TabsContext = {
  selectTab: (tab: string) => void;
  selectedTab: string | null;
  tabsPrefix: string;
};

export const TabListContext = createContext<TabsContext>({
  selectedTab: null,
  selectTab: (tab: string) => {
    console.warn(`"${tab}" should not be used without TabsContext.Provider`);
  },
  tabsPrefix: ''
});
