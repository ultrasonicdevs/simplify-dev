import useListItemFocus from '../../src/hooks/useListItemFocus/useListItemFocus';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { it, expect, describe, afterEach } from 'vitest';
import '@testing-library/jest-dom';
const MockComponent = () => {
  const { listRef, onKeyDown } = useListItemFocus('list-item');

  return (
    <div ref={listRef}>
      <div role='list-item' tabIndex={0} onKeyDown={onKeyDown}>
        Item 1
      </div>
      <div role='list-item' tabIndex={0} onKeyDown={onKeyDown}>
        Item 2
      </div>
      <div role='list-item' tabIndex={0} onKeyDown={onKeyDown}>
        Item 3
      </div>
    </div>
  );
};

describe('useListItemFocus', () => {
  afterEach(cleanup);
  it('should focus previous item on ArrowUp/ArrowLeft key press', () => {
    render(<MockComponent />);
    const listItem1 = screen.getByText('Item 1');
    const listItem2 = screen.getByText('Item 2');

    listItem2.focus();
    fireEvent.keyDown(document.activeElement as Element, { key: 'ArrowUp' });

    expect(document.activeElement).toBe(listItem1);
  });

  it('should focus next item on ArrowDown/ArrowRight key press', () => {
    render(<MockComponent />);
    const listItem2 = screen.getByText('Item 2');
    const listItem3 = screen.getByText('Item 3');

    listItem2.focus();
    fireEvent.keyDown(document.activeElement as Element, { key: 'ArrowDown' });

    expect(document.activeElement).toBe(listItem3);
  });
});
