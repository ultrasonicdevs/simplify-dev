import { SetState } from '@lib/react/types';
import { useState } from 'react';

export type Toggle = (initialState?: boolean) => {
  toggle: boolean;
  onToggle: () => void;
  setToggle: SetState<boolean>;
};

export const useToggle: Toggle = (initialState = false) => {
  const [toggle, setToggle] = useState<boolean>(initialState);

  const onToggle = () => setToggle((prevState) => !prevState);

  return { toggle, onToggle, setToggle };
};
