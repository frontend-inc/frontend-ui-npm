import React from 'react';
type DocumentEditDrawerProps = {
    open: boolean;
    handleClose: () => void;
    documentId?: string;
    collectionId?: string;
    handleSubmit: (items: any[]) => void;
};
declare const DocumentEditDrawer: React.FC<DocumentEditDrawerProps>;
export default DocumentEditDrawer;
