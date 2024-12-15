import React from 'react';
import { DocumentListProps } from '../documents/DocumentList';
export type SimilarListProps = DocumentListProps & {
    documentId: string;
};
declare const SimilarList: React.FC<SimilarListProps>;
export default SimilarList;
