import React from 'react';
type DocumentEditProps = {
    open: boolean;
    handleClose: () => void;
    documentId?: string;
    collectionId: string;
    handleSubmit: (items: any[]) => void;
};
declare const DocumentEdit: React.FC<DocumentEditProps>;
export default DocumentEdit;
