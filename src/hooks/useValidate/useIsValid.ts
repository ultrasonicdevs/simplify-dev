import { IsValid } from './useIsValid.types';
import { useEffect, useState } from 'react';

const useIsValid: IsValid = (regexp, value) => {
  const [isValid, setIsValid] = useState<boolean>(true);

  useEffect(() => {
    if (value.length) setIsValid(new RegExp(regexp).test(value));
  }, [isValid, regexp, value]);

  if (!value.length) return true;

  return isValid;
};

export default useIsValid;
