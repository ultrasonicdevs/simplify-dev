import { fireEvent, render } from '@testing-library/react';

import { describe, expect, it, vi } from 'vitest';
import { Toggle } from './Toggle';

describe('Toggle', () => {
  it('renders unchecked Toggle', () => {
    const { getByRole } = render(<Toggle toggle={false} />);
    const checkboxElement = getByRole('Toggle');
    const checkmarkElement = getByRole('Toggle-checker');

    expect(checkboxElement).toBeInTheDocument();
    expect(checkmarkElement).toHaveClass('opacity-0');
  });

  it('renders checked Toggle', () => {
    const { getByRole } = render(<Toggle toggle />);
    const checkmarkElement = getByRole('Toggle-checker');

    expect(checkmarkElement).toHaveClass('opacity-1');
  });

  it('changes state when clicked', () => {
    const changeStateMock = vi.fn();
    const { getByRole } = render(<Toggle toggle={false} changeState={changeStateMock} />);
    const checkboxElement = getByRole('Toggle');

    fireEvent.click(checkboxElement);
    expect(changeStateMock).toHaveBeenCalled();
  });

  it('does not change state when disabled and clicked', () => {
    const changeStateMock = vi.fn();
    const { getByRole } = render(<Toggle toggle={false} changeState={changeStateMock} disabled />);
    const checkboxElement = getByRole('Toggle');

    fireEvent.click(checkboxElement);
    expect(changeStateMock).not.toHaveBeenCalled();
  });
});
