export const formatAcceptedTypesToInputAccept = (acceptedTypes: string[]) => {
  return acceptedTypes.join(',');
};

export const formatBytes = (bytes: number, decimals?: number) => {
  if (bytes === 0) return '0 Байт';

  const k = 1024;
  const dm = decimals || 2;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

export const formatFileName = (fileName: string) => {
  return fileName.split('.')[0];
};

export const formatFileType = (fileType: string) => {
  return fileType.split('/')[1];
};
