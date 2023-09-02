import useCheckbox from '../../src/hooks/useCheckbox/useCheckbox';
import { renderHook, act } from '@testing-library/react';
import { it, expect, describe } from 'vitest';

describe('useCheckbox', () => {
  it('should initialize with correct toggle value', () => {
    const {
      result: {
        current: [toggle]
      }
    } = renderHook(() => useCheckbox(false, null));

    expect(toggle).toBe(false);
  });

  it('should update toggle value on changeState', () => {
    const { result } = renderHook(() => useCheckbox(false, null));

    act(() => {
      result.current[1]();
    });

    expect(result.current[0]).toBe(true);
  });

  it('should not update toggle value if disabled', () => {
    const { result } = renderHook(() => useCheckbox(true, null));

    act(() => {
      result.current[1]();
    });

    expect(result.current[0]).toBe(false);
  });
});
