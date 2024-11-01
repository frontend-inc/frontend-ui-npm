import React from 'react';
type DocumentListSheetProps = {
    open: boolean;
    field: any;
    appId?: string;
    handleSubmit: (items: any[]) => void;
    handleClose: () => void;
    enableMultipleSelect?: boolean;
};
declare const DocumentListSheet: React.FC<DocumentListSheetProps>;
export default DocumentListSheet;
