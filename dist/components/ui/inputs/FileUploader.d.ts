import React from 'react';
type FileUploaderProps = {
    label?: string;
    loading?: boolean;
    handleSubmit: (files: File[]) => Promise<void>;
};
declare const FileUploader: React.FC<FileUploaderProps>;
export default FileUploader;
