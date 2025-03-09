import { createContext } from 'react';

export const createAccurateContext = <T>() => createContext<T | null>(null);
