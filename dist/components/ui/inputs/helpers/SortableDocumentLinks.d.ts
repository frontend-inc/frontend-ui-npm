import React from 'react';
import { DocumentLinkType } from '../../../../types';
type SortableDocumentLinksProps = {
    documentLinks: DocumentLinkType[];
    handleDrop: (sorted: any) => void;
    handleDelete: (resource: any) => void;
    handleEdit: (resource: any) => void;
};
declare const SortableDocumentLinks: React.FC<SortableDocumentLinksProps>;
export default SortableDocumentLinks;
