import React from 'react';
import { DocumentListItemsProps } from './DocumentListItems';
export type DocumentCarouselListItemsProps = DocumentListItemsProps & {
    enableAutoPlay?: boolean;
};
declare const DocumentCarouselListItems: React.FC<DocumentCarouselListItemsProps>;
export default DocumentCarouselListItems;
