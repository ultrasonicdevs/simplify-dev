import { describe, expect, it, vi } from 'vitest';

import { fireEvent, render } from '@testing-library/react';

import { Toggle } from './Toggle';

describe('Toggle', () => {
  it('renders unchecked Toggle', () => {
    const { getByRole } = render(<Toggle toggle={false} />);
    const checkboxElement = getByRole('button');
    const checkmarkElement = getByRole('checkbox');

    expect(checkboxElement).toBeInTheDocument();
    expect(checkmarkElement.className).includes('bg-toggle');
  });

  it('renders checked Toggle', () => {
    const { getByRole } = render(<Toggle toggle />);
    const checkmarkElement = getByRole('checkbox');

    expect(checkmarkElement).toBeInTheDocument();
    expect(checkmarkElement.className).includes('bg-toggle-checked');
  });

  it('changes state when clicked', () => {
    const changeStateMock = vi.fn();
    const { getByRole } = render(
      <Toggle toggle={false} changeState={changeStateMock} />
    );
    const checkboxElement = getByRole('checkbox');

    fireEvent.click(checkboxElement);
    expect(changeStateMock).toHaveBeenCalled();
  });

  it('does not change state when disabled and clicked', () => {
    const changeStateMock = vi.fn();
    const { getByRole } = render(
      <Toggle toggle={false} changeState={changeStateMock} disabled />
    );
    const checkboxElement = getByRole('checkbox');

    fireEvent.click(checkboxElement);
    expect(changeStateMock).not.toHaveBeenCalled();
  });
});
