import { MouseEvent } from 'react';
import { RxCross2 } from 'react-icons/rx';

import { Box } from '@ui/Box';
import { Button } from '@ui/Button';
import { Typography } from '@ui/Typography';
import { cn } from '@utils';

import { formatBytes, formatFileName, formatFileType } from '../utils';

type UploadedFilePreviewProps = {
  file: File;
  error?: string | string[];
  disabled?: boolean;
  onDelete: (e: MouseEvent<HTMLButtonElement>) => void;
};

export const UploadedFilePreview = ({
  onDelete,
  error,
  file,
  disabled,
}: UploadedFilePreviewProps) => {
  return (
    <Box className="overflow-hidden w-full">
      <Box
        className={cn(
          'flex items-center p-2 border border-grey-300 rounded-xl gap-2 bg-white',
          error && 'border-red-500 bg-red-100',
          disabled && 'bg-gray-300'
        )}>
        <FileType type={formatFileType(file.type)} />
        <Typography
          as="p"
          className="grow text-ellipsis overflow-hidden font-medium">
          {formatFileName(file.name)}
        </Typography>
        <Typography as="span" className="font-medium whitespace-nowrap">
          {formatBytes(file.size)}
        </Typography>
        <Button buttonType="text" variant="tertiary" onClick={onDelete}>
          <RxCross2 className="w-6 h-6" />
        </Button>
      </Box>
      {error && (
        <Typography as="span" className="text-sm font-medium text-red-500">
          {Array.isArray(error) ? error.join(', ') : error}
        </Typography>
      )}
    </Box>
  );
};

const FileType = ({ type }: { type: string }) => (
  <Box className="px-[6px] py-[5px] rounded bg-[#2358E1]">
    <Typography as="p" className="text-white text-[10px] whitespace-nowrap">
      {type}
    </Typography>
  </Box>
);
