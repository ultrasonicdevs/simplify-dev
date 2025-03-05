import { ChangeEvent, FC, MouseEvent, useCallback, useRef } from 'react';
import { IoCheckmark } from 'react-icons/io5';
import { TbFileUpload } from 'react-icons/tb';

import { Polymorph } from '@ui/Polymorph';
import { Typography } from '@ui/Typography';
import { cn } from '@utils';

import { formatAcceptedTypesToInputAccept } from './utils';

import { UploadedFilePreview } from './ui/UploadedFilePreview';

import { FileUploaderProps } from './FileUploader.types';

export const FileUploader: FC<FileUploaderProps> = ({
  title,
  className,
  disabled,
  description,
  acceptedFileTypes,
  error,
  files,
  setFiles,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const clickOnInput = useCallback(() => {
    if (!disabled && typeof inputRef !== 'function') inputRef?.current?.click();
  }, [disabled]);

  const uploadFile = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const uploadedFile = Array.from(e.target.files as FileList);
      setFiles((prev) => [...prev, ...uploadedFile]);
    },
    [setFiles]
  );

  const deleteFile =
    (deleteFile: File) => (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      // eslint-disable-next-line sonarjs/no-nested-functions
      setFiles((prev) => prev?.filter((file: File) => file !== deleteFile));
    };

  return (
    <div
      className={cn(className, disabled && 'pointer-event-none')}
      onClick={clickOnInput}>
      <Polymorph
        as="input"
        className={cn(
          disabled && 'pointer-event-none',
          'invisible opacity-0 absolute'
        )}
        type="file"
        ref={inputRef}
        accept={formatAcceptedTypesToInputAccept(acceptedFileTypes)}
        onChange={uploadFile}
        multiple
      />
      <article
        className={cn(
          'overflow-hidden h-full w-full border-[2px] border-dashed border-grey-300 rounded-[16px] p-[24px]',
          error && 'border-red-500',
          disabled && 'bg-grey-100'
        )}>
        <div className="w-full h-full grid grid-cols-1 place-items-center gap-[12px]">
          <div
            className={cn(
              'grid place-content-center bg-blue-100 h-[60px] w-[60px] rounded-[8px]',
              files?.length && 'bg-green-200'
            )}>
            {files?.length ? (
              <IoCheckmark className="stroke-green-700 stroke-[2px] w-[32px] h-[32px]" />
            ) : (
              <TbFileUpload className="stroke-blue-400 stroke-[2px] w-[32px] h-[32px]" />
            )}
          </div>
          <Typography className="text-center">
            {title || 'Загрузите файл'}
          </Typography>
          {description && <Typography as="span">{description}</Typography>}
          {files?.map((file: File, index: number) => (
            <UploadedFilePreview
              key={`${file.name}`}
              file={file}
              disabled={disabled}
              error={error?.types?.[index] as string}
              onDelete={deleteFile(file)}
            />
          ))}
        </div>
      </article>
      {error?.message && (
        <Typography as="span" className="text-sm font-medium text-red-500">
          {error.message}
        </Typography>
      )}
    </div>
  );
};
