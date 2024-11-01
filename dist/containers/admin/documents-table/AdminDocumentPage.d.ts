import React from 'react';
type DocumentEditProps = {
    appId: string | number;
    collectionId: string | number;
    documentId: string | number;
    errors?: any;
    enableUsers?: boolean;
    enableShopify?: boolean;
};
declare const DocumentEdit: React.FC<DocumentEditProps>;
export default DocumentEdit;
