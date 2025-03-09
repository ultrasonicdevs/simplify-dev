import { KeyboardEvent, useCallback, useRef } from 'react';

export const useListItemFocus = (role: string) => {
  const listRef = useRef<HTMLDivElement>(null);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const list = listRef.current;
      if (!list) return;

      const tabs = Array.from<HTMLElement>(
        list.querySelectorAll(`[role=${role}]:not([disabled])`)
      );
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
        case 'Tab': {
          if (e.shiftKey) {
            const prev = (index - 1 + tabs.length) % tabs.length;
            tabs[prev]?.focus();
          } else {
            const next = (index + 1 + tabs.length) % tabs.length;
            tabs[next]?.focus();
          }
          break;
        }
      }
    },
    [role]
  );

  return { listRef, onKeyDown };
};
