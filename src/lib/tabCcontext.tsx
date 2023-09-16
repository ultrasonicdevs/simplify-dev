import { createContext } from 'react';

export type TabsContext = {
  selectTab: (tab: string) => void;
  selectedTab: string | null;
  tabsPrefix: string;
};
export const TabListContext = createContext<TabsContext>({
  selectedTab: null,
  selectTab: (tab: string) => {
    console.log(`"${tab}" should not be used without TabsContext.Provider`);
  },
  tabsPrefix: ''
});
