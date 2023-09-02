import { ComponentProps, FC, ReactElement, useCallback, useContext } from 'react';
import useListItemFocus from '../../hooks/useListItemFocus/useListItemFocus';
import { TabListProps } from './Tabs.types';
import { TabListContext } from './Provider';
import clone from '../../lib/clone';
import Box from '../Box/Box';

const TabList: FC<TabListProps> = ({
  children,
  defaultIndex,
  selectedVariant,
  selectedClassName,
  'aria-label': ariaLabel,
  ...props
}) => {
  const { listRef, onKeyDown } = useListItemFocus('tab');
  const { selectedTab, selectTab, tabsPrefix } = useContext(TabListContext);
  const select = useCallback((id: string) => selectTab(id), [selectTab]);

  const childrenList: ReactElement[] = Array.isArray(children) ? children : [children];

  return (
    <Box {...props} ref={listRef} role='tablist' aria-label={ariaLabel} onKeyDown={onKeyDown}>
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
