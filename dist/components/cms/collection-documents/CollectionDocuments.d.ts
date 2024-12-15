import React from 'react';
import { DocumentListProps } from '../documents/DocumentList';
export type CollectionDocumentsProps = Omit<DocumentListProps, 'style' | 'url'> & {
    collectionId: string;
};
declare const CollectionDocuments: React.FC<CollectionDocumentsProps>;
export default CollectionDocuments;
