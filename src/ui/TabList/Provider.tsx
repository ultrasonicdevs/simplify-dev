import { FC, useState, useId, useMemo, PropsWithChildren } from 'react';
import { TabListContext } from './lib/tabContext';

export type ProviderProps = PropsWithChildren & { defaultSelectedId: string } 

export const TabListProvider: FC<ProviderProps> = ({
    children,
    defaultSelectedId
  }) => {
    const [selectedTab, selectTab] = useState(defaultSelectedId);
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