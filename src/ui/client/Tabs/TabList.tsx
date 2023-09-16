import {
  ComponentProps,
  FC,
  ReactElement,
  ReactNode,
  useCallback,
  useContext,
  useId,
  useMemo,
  useState
} from 'react';
import useListItemFocus from '../../../hooks/useListItemFocus/useListItemFocus';
import { TabListContext } from '../../../lib/tabCcontext';
import { TabListProps } from './Tabs.types';
import clone from '../../../lib/clone';
import Box from '../../Box/Box';

export const TabListProvider: FC<{ children: ReactNode; defaultIndex: string }> = ({
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

const TabList: FC<TabListProps> = ({
  children,
  selectedVariant,
  selectedClassName,
  'aria-label': ariaLabel,
  ...props
}) => {
  const { listRef, onKeyDown } = useListItemFocus('tab');
  const { selectedTab, selectTab, tabsPrefix } = useContext(TabListContext);
  const select = useCallback((id: string) => selectTab(id), [selectTab]);
  const id = useId();

  const childrenList: ReactElement[] = Array.isArray(children) ? children : [children];

  return (
    <Box {...props} ref={listRef} role='tablist' aria-label={ariaLabel || id} onKeyDown={onKeyDown}>
      {childrenList?.map((child) => {
        const props: ComponentProps<any> = {
          onClick: () => {
            if (typeof child.props?.onClick === 'function') child.props?.onClick();
            select(child.props?.id);
          },
          role: 'tab',
          key: child.props?.id,
          'aria-selected': selectedTab === child.props?.id,
          'aria-controls': `${tabsPrefix}-tab-panel-${child.props?.id}`,
          tabIndex: selectedTab === child.props?.id ? 0 : -1,
          variant: selectedTab === child.props?.id ? selectedVariant : child.props?.variant,
          className: selectedTab === child.props?.id ? selectedClassName : child.props?.className
        };

        return clone(child, props);
      })}
    </Box>
  );
};

export default TabList;
