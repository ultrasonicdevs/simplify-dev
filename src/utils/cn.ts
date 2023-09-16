import { ClassValue } from 'class-variance-authority/dist/types';
import { cx } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const cn = (...inputs: ClassValue[]) => {
  return twMerge(cx(inputs));
};

export default cn;
