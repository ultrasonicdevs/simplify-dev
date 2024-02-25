import { ForwardedRef, useCallback, useEffect, useRef, useState } from 'react';

export type Toggle = (disabled: boolean, ref: ForwardedRef<boolean>) => [boolean, () => void];

export const useToggle: Toggle = (disabled, ref) => {
  const targetRef = useRef<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(targetRef.current);

  useEffect(() => {
    if (!ref) return;

    if (typeof ref !== 'function') {
      targetRef.current = ref.current as boolean;
      setToggle(targetRef.current);
    }
  }, [ref]);

  const changeState = useCallback(() => {
    if (disabled) return;
    setToggle((prevState) => {
      targetRef.current = !prevState;

      return !prevState;
    });
  }, [disabled, targetRef]);

  return [toggle, changeState];
};
