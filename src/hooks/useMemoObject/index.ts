import { useMemo } from 'react';

export const useMemoObject = <T extends Record<string, unknown>>(
  groupObject: T
): T => {
  const depth = Object.values(groupObject);
  return useMemo<T>(() => groupObject, depth);
};
