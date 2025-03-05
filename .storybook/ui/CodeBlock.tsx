import { useCopyToClipboard } from '@hooks';
import { cn } from '@libs';
import { SyntaxHighlighter, SyntaxHighlighterProps } from '@storybook/components';
import { Button } from '@ui';
import { ReactNode, useState } from 'react';
import { PiCopySimpleThin } from 'react-icons/pi';

type CodeBlockProps = SyntaxHighlighterProps & {
  className: string;
  children: string | ReactNode;
};

export const CodeBlock = ({ className, children, ...props }: CodeBlockProps) => {
  const [viewCopied, setViewCopied] = useState(false);
  const [copy] = useCopyToClipboard({
    copyValue: typeof children === 'string' ? children : '',
    onSuccess: () => {
      setViewCopied(true);
      setTimeout(() => setViewCopied(false), 1000);
    }
  });

  if (
    typeof className !== 'string' &&
    (typeof children !== 'string' || !(children as string).match(/[\n\r]/g))
  ) {
    return <code className='px-1.5 py-0.5 bg-ash-100 text-stone-600 rounded'>{children}</code>;
  }

  // className: "lang-jsx"
  const language = className && className.split('-');
  return (
    <div className='group/copy relative bg-ash-50 rounded-md'>
      <span className='group-hover/copy:opacity-0 opacity-100 duration-300 absolute top-2 right-2 z-10 text-xs'>
        {language && language[1]}
      </span>
      <Button
        // variant='null'
        // size='icon-sm'
        className={cn(
          'group-hover/copy:opacity-100 opacity-0 duration-150',
          'outline-none active:ring active:ring-indigo-300',
          'border border-ash-500 bg-white',
          'absolute right-2 top-2 z-20',
          'flex items-center justify-center rounded-sm transition-all',
          viewCopied ? 'w-24 divide-x divide-ash-200' : 'w-8'
        )}
        onClick={copy}>
        {viewCopied && <span className='pr-1.5 text-ash-900 text-xs'>Copied</span>}
        <PiCopySimpleThin
          className={cn('w-5 h-5 text-ash-900 flex-shrink-0', viewCopied && 'ml-1')}
        />
      </Button>
      <SyntaxHighlighter
        {...props}
        language={language && language[1]}
        customStyle={{ fontSize: '14px' }}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
};
