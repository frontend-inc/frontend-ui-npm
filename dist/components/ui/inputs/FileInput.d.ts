import React from "react";
type FileInputProps = {
    errors?: any;
    fileUrl: string;
    handleUpload: (file: File) => void;
    handleDelete?: () => void;
};
declare const FileInput: React.FC<FileInputProps>;
export default FileInput;
