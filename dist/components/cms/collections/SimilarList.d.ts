import React from 'react';
import { CollectionListProps } from '../collections/CollectionList';
export type SimilarListProps = CollectionListProps & {
    documentId: string;
};
declare const SimilarList: React.FC<SimilarListProps>;
export default SimilarList;
