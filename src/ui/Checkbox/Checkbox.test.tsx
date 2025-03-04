import { describe, expect, it, vi } from 'vitest';

import { fireEvent, render } from '@testing-library/react';

import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renders unchecked checkbox', () => {
    const { getByRole } = render(<Checkbox toggle={false} />);
    const checkboxElement = getByRole('button');
    const checkmarkElement = getByRole('checkbox');

    expect(checkboxElement).toBeInTheDocument();
    expect(checkmarkElement).toHaveClass('opacity-0');
  });

  it('renders checked checkbox', () => {
    const { getByRole } = render(<Checkbox toggle />);
    const checkmarkElement = getByRole('checkbox');

    expect(checkmarkElement).toHaveClass('opacity-1');
  });

  it('changes state when clicked', () => {
    const changeStateMock = vi.fn();
    const { getByRole } = render(
      <Checkbox toggle={false} changeState={changeStateMock} />
    );
    const checkboxElement = getByRole('checkbox');

    fireEvent.click(checkboxElement);
    expect(changeStateMock).toHaveBeenCalled();
  });

  it('does not change state when disabled and clicked', () => {
    const changeStateMock = vi.fn();
    const { getByRole } = render(
      <Checkbox toggle={false} changeState={changeStateMock} disabled />
    );
    const checkboxElement = getByRole('button');

    fireEvent.click(checkboxElement);
    expect(changeStateMock).not.toHaveBeenCalled();
  });

  it('renders error variant when isError is true', () => {
    const { getByRole } = render(<Checkbox toggle={false} isError />);
    const checkboxElement = getByRole('button');

    expect(checkboxElement).toHaveClass('bg-cb-error');
  });
});
