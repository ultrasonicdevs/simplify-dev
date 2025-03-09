import { createContext } from 'react';

export const CreateAccurateContext = <T>() => createContext<T | null>(null);
