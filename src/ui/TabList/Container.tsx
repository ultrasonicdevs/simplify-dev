import { JSXElementConstructor, ReactElement, useCallback, useId } from 'react';

import { useAccurateContext } from '@hooks';
import { useListItemFocus } from '@hooks/useListItemFocus';
import { PolymorphProps } from '@ui/Polymorph';
import { clone, cn } from '@utils';

import { TabListContext } from './Provider';

export type TabListProps = {
  selectedVariant?: string;
  selectedClassName?: string;
} & PolymorphProps<'article'>;

export const TabListContainer = ({
  children,
  selectedVariant,
  selectedClassName,
  ...props
}: TabListProps) => {
  const { listRef, onKeyDown } = useListItemFocus('tab');
  const { selectedTab, selectTab, tabsPrefix } =
    useAccurateContext(TabListContext);
  const id = useId();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const childrenList: ReactElement<any, JSXElementConstructor<any>>[] =
    Array.isArray(children) ? children : [children];

  return (
    <article
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
            selectTab(key);
          },
          role: 'tab',
          'aria-selected': selectedTab === key,
          'aria-controls': `${tabsPrefix}-tab-panel-${key}`,
          tabIndex: 0,
          variant: isSelected ? selectedVariant : child.props?.variant,
          className: cn(
            child.props?.className,
            isSelected && selectedClassName
          ),
        };

        return clone<typeof child.props>(child, props);
      })}
    </article>
  );
};
