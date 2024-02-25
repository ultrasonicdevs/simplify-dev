import { Dispatch, InputHTMLAttributes, SetStateAction } from 'react';

export type FileUploaderError = {
  message?: string;
  types?: string[];
};

export type FileUploaderProps = {
  title: string;
  description?: string;
  disabled?: boolean;
  acceptedFileTypes: string[];
  error?: FileUploaderError;
  files: File[];
  setFiles: Dispatch<SetStateAction<File[]>>;
} & InputHTMLAttributes<HTMLInputElement>;
