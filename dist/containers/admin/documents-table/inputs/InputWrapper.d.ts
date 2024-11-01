import React from 'react';
type DocumentInputWrapperProps = {
    title: string;
    label: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
    expandable?: boolean;
    disablePadding?: boolean;
};
declare const DocumentInputWrapper: React.FC<DocumentInputWrapperProps>;
export default DocumentInputWrapper;
