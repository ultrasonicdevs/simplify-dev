import '@testing-library/jest-dom';
import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useToggle } from './useToggle';

describe('useToggle', () => {
  it('initialize with correct toggle value', () => {
    const initValue = false;
    const { result } = renderHook(() => useToggle(initValue));

    expect(result.current.toggle).toBe(initValue);
  });

  it('should update toggle value on changeState', () => {
    const initValue = false;
    const { result } = renderHook(() => useToggle(initValue));

    act(() => result.current.changeState());

    expect(result.current.toggle).toBe(!initValue);
  });
});
