import React from 'react';
import { IoCheckmark } from 'react-icons/io5';
import { PiCopySimpleThin } from 'react-icons/pi';

import { useCopyToClipboard } from '@hooks';
import { cn } from '@libs';
import {
  SyntaxHighlighter,
  SyntaxHighlighterProps,
} from '@storybook/components';
import { Button } from '@ui';

type CodeBlockProps = SyntaxHighlighterProps & {
  className: string;
  children: string | React.ReactNode;
};

export const CodeBlock = ({
  className,
  children,
  ...props
}: CodeBlockProps) => {
  const [viewCopied, setViewCopied] = React.useState(false);
  const [copy] = useCopyToClipboard({
    copyValue: typeof children === 'string' ? children : '',
    onSuccess: () => {
      setViewCopied(true);
      setTimeout(() => setViewCopied(false), 1000);
    },
  });

  if (
    typeof className !== 'string' &&
    (typeof children !== 'string' || !(children as string).match(/[\n\r]/g))
  ) {
    return (
      <code className="px-1.5 py-0.5 bg-ash-100 text-stone-600 rounded">
        {children}
      </code>
    );
  }

  const language = className && className.split('-');
  return (
    <div className="group/copy relative bg-white border border-ash-300 rounded-sm shadow-sm shadow-black/10">
      <span className="absolute top-2 right-3 z-10 text-xs">
        {language && language[1]}
      </span>
      <Button
        buttonType="icon"
        variant="null"
        size="md"
        className={cn(
          'group-hover/copy:opacity-100 opacity-0',
          'border border-ash-300 bg-white',
          'absolute right-2 top-2 z-20',
          'transition-all overflow-hidden',
          viewCopied && 'w-22 divide-x divide-ash-200'
        )}
        onClick={copy}>
        {viewCopied && <p className="px-1.5 text-ash-900 text-xs">Copied</p>}
        {viewCopied ? (
          <IoCheckmark className="w-5 h-5 m-1 text-ash-900 flex-shrink-0 flex-grow-0 block justify-self-end" />
        ) : (
          <PiCopySimpleThin className="w-5 h-5 m-1.5 text-ash-900 flex-shrink-0 flex-grow-0 block justify-self-end" />
        )}
      </Button>
      <SyntaxHighlighter {...props} customStyle={{ fontSize: '14px' }}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
};
