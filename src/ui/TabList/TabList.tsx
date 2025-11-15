import {
  JSXElementConstructor,
  ReactElement,
  useCallback,
  useContext,
  useId,
} from 'react';

import { useListItemFocus } from '@hooks/useListItemFocus';
import { cn } from '@utils/cn';

import { Box, BoxProps } from '../Box';
import clone from './lib/clone';
import { TabListContext } from './lib/tabContext';

export type TabListProps = {
  selectedVariant?: string;
  selectedClassName?: string;
} & BoxProps;

export const TabList = ({
  children,
  selectedVariant,
  selectedClassName,
  ...props
}: TabListProps) => {
  const { listRef, onKeyDown } = useListItemFocus('tab');
  const { selectedTab, selectTab, tabsPrefix } = useContext(TabListContext);
  const select = useCallback((id: string) => selectTab(id), [selectTab]);
  const id = useId();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const childrenList: ReactElement<any, JSXElementConstructor<any>>[] =
    Array.isArray(children) ? children : [children];

  return (
    <Box
      as="article"
      {...props}
      ref={listRef}
      role="tablist"
      aria-label={id}
      onKeyDown={onKeyDown}>
      {childrenList?.map((child, index) => {
        const key = child.props?.id ?? `${id}-${index}`;

        const isSelected = selectedTab === key;

        const props: typeof child.props = {
          onClick: () => {
            child.props?.onClick?.();
            select(key);
          },
          role: 'tab',
          'data-selected': selectedTab === key,
          'aria-controls': `${tabsPrefix}-tab-panel-${key}`,
          tabIndex: isSelected ? 0 : -1,
          variant: isSelected ? selectedVariant : child.props?.variant,
          className: cn(
            child.props?.className,
            isSelected && selectedClassName
          ),
        };

        return clone<typeof child.props>(child, props);
      })}
    </Box>
  );
};
