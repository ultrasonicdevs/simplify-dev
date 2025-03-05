'use client';
import { useCallback, useEffect, useRef, useState } from 'react';

interface CopyToClipboardInput {
  copyValue: string;
  onSuccess?: () => void;
  onError?: () => void;
}

export const useCopyToClipboard = ({
  copyValue,
  onError,
  onSuccess
}: CopyToClipboardInput): [() => void, boolean, (value: boolean) => void] => {
  const copyableString = useRef(copyValue);
  const [copied, setCopied] = useState(false);

  const copyAction = useCallback(async () => {
    if (navigator?.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(copyableString.current);
        setCopied(true);
        onSuccess?.();
      } catch (error) {
        console.error('Failed to copy text:', error);
        setCopied(false);
        onError?.();
      }
    } else {
      console.warn('Clipboard API not available');
      setCopied(false);
    }
  }, []);

  useEffect(() => {
    copyableString.current = copyValue;
  }, [copyValue]);

  return [copyAction, copied, setCopied];
};
