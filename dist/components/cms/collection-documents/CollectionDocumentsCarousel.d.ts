import React from 'react';
import { DocumentListProps } from '../documents/DocumentList';
export type CollectionDocumentsCarouselProps = DocumentListProps & {
    collectionId: string;
    enableAutoplay?: boolean;
};
declare const CollectionDocumentsCarousel: React.FC<CollectionDocumentsCarouselProps>;
export default CollectionDocumentsCarousel;
