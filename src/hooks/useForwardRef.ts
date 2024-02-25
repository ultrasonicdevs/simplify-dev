import { ForwardedRef, useEffect, useRef } from 'react';

export const useForwardRef = <T>(ref: ForwardedRef<T>, initialValue: unknown = null) => {
  const targetRef = useRef<T>(initialValue as T);

  useEffect(() => {
    if (!ref) return;

    if (typeof ref === 'function') {
      ref(targetRef.current);
    } else {
      targetRef.current = ref.current as T;
    }
  }, [ref]);

  return targetRef;
};
