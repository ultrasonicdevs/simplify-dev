import { useState } from 'react';

export type Toggle = (initialState?: boolean) => {
  toggle: boolean;
  changeState: () => void;
};

export const useToggle: Toggle = (initialState = false) => {
  const [toggle, setToggle] = useState<boolean>(initialState);

  const changeState = () => setToggle((prevState) => !prevState);

  return { toggle, changeState };
};
