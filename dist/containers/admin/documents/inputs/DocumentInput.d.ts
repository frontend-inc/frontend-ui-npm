import React from 'react';
type DocumentInputProps = {
    errors?: any;
    field: any;
    value: any;
    placeholder?: string;
    handleChange: (e: any) => void;
    document?: any;
    collection?: any;
    handleAddReferences?: (items: any[]) => void;
    handleRemoveReferences?: (items: any[]) => void;
    handleAddAttachment?: (field: any, file: any) => void;
    handleRemoveAttachment?: (field: any, file: any) => void;
};
declare const DocumentInput: React.FC<DocumentInputProps>;
export default DocumentInput;
