import { ForwardedRef } from 'react';

export type CheckboxType = (disabled: boolean, ref: ForwardedRef<boolean>) => [boolean, () => void];
