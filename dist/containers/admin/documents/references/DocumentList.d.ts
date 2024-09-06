import React from 'react';
type DocumentListDrawerProps = {
    open: boolean;
    field: any;
    appId?: string;
    handleSubmit: (items: any[]) => void;
    handleClose: () => void;
    enableMultipleSelect?: boolean;
};
declare const DocumentListDrawer: React.FC<DocumentListDrawerProps>;
export default DocumentListDrawer;
