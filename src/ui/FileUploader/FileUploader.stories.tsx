import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { FileUploader } from './FileUploader';

type FileUploaderStory = StoryObj<typeof FileUploader>;

const meta: Meta<typeof FileUploader> = {
  component: FileUploader,
  parameters: {
    componentSubtitle: 'File uploader component'
  },
  tags: ['autodocs']
};

export default meta;

export const FileUploaderDefault: FileUploaderStory = {
  args: {
    title: 'Загрузите файл',
    description: 'PDF, JPEG, JPG, PNG — 10МБ',
    disabled: false,
    acceptedFileTypes: ['image/jpeg', 'image/jpg', 'application/pdf']
  },
  render: (args) => <FileUploaderExample {...args} />
};

const FileUploaderExample = (props: {
  title: string;
  description?: string;
  disabled?: boolean;
  acceptedFileTypes: string[];
}) => {
  const [file, setFiles] = useState<File[]>([]);

  return <FileUploader {...props} files={file} setFiles={setFiles} />;
};
