import { ForwardedRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';

export type Toggle = (disabled: boolean, ref: ForwardedRef<boolean>) => [boolean, () => void];

export const useToggle: Toggle = (disabled, ref) => {
  const initValue = typeof ref !== 'function' 
    ? ref?.current as boolean 
    : false;

  const [toggle, setToggle] = useState<boolean>(initValue);

  useImperativeHandle(ref, () => toggle);

  useEffect(() => {
    if (!ref) return;
    
    if (typeof ref !== 'function') setToggle(ref?.current as boolean);
  }, [ref]);

  const changeState = useCallback(() => {
    if (disabled) return;
    setToggle(prevState => !prevState);
  }, [disabled]);

  return [toggle, changeState];
};
