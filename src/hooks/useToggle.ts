import { ForwardedRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';

export type Toggle = (initialState?: boolean) => [boolean, () => void];

export const useToggle: Toggle = (initialState = false) => {
  const [toggle, setToggle] = useState<boolean>(initialState);

  const changeState = useCallback(() => {
    setToggle(prevState => !prevState);
  }, []);

  return [toggle, changeState];
};
