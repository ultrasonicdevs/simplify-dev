import { Context, useContext } from 'react';

export const useAccurateContext = <T>(ctx: Context<T | null>): T => {
  const value = useContext(ctx);
  if (value === null) {
    throw new Error('Context value is null');
  }
  return value;
};
