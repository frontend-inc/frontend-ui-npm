import React from 'react';
type DocumentItemProps = {
    item?: any;
    handleEditItem: (item: any) => void;
    handleRemoveItem: (item: any) => void;
    enableCssFix?: boolean;
};
declare const DocumentItem: React.FC<DocumentItemProps>;
export default DocumentItem;
