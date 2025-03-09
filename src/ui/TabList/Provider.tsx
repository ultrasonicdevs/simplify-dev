import { PropsWithChildren, useId, useState } from 'react';

import { useMemoObject } from '@hooks';
import { createAccurateContext } from '@libs';

type TabsContext = {
  selectTab: (tab: string) => void;
  selectedTab: string | null;
  tabsPrefix: string;
};

export const TabListContext = createAccurateContext<TabsContext>();

export type ProviderProps = PropsWithChildren & { defaultSelectedId: string };

export const TabListProvider = ({
  children,
  defaultSelectedId,
}: ProviderProps) => {
  const [selectedTab, selectTab] = useState(defaultSelectedId);
  const prefix = useId();

  const contextValue = useMemoObject({
    selectTab,
    selectedTab,
    tabsPrefix: prefix,
  });

  return (
    <TabListContext.Provider value={contextValue}>
      {children}
    </TabListContext.Provider>
  );
};
