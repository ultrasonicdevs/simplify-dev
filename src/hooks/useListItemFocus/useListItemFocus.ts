import { useCallback, useRef, KeyboardEvent } from 'react';

const useListItemFocus = (role: string) => {
  const listRef = useRef<HTMLDivElement>(null);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const list = listRef.current;
      if (!list) return;
      const tabs = Array.from<HTMLElement>(list.querySelectorAll(`[role=${role}]:not([diabled])`));
      const index = tabs.indexOf(document.activeElement as HTMLElement);
      if (index < 0) return;

      switch (e.key) {
        case 'ArrowUp':
        case 'ArrowLeft': {
          const next = (index - 1 + tabs.length) % tabs.length;
          tabs[next]?.focus();
          break;
        }
        case 'ArrowDown':
        case 'ArrowRight': {
          const next = (index + 1 + tabs.length) % tabs.length;
          tabs[next]?.focus();
          break;
        }
      }
    },
    [role]
  );

  return { listRef, onKeyDown };
};

export default useListItemFocus;
