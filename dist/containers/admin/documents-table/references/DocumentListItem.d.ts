import React from 'react';
type DocumentListItemProps = {
    document?: any;
    handleClick?: () => void;
    selected?: boolean;
};
declare const DocumentListItem: React.FC<DocumentListItemProps>;
export default DocumentListItem;
