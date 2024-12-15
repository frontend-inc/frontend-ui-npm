import React from 'react';
import { CollectionDocumentsCarouselProps } from '../../components/cms/collection-documents/CollectionDocumentsCarousel';
import { SectionProps, HeadingProps } from '../../types';
type CmsCollectionDocumentsCarouselProps = CollectionDocumentsCarouselProps & SectionProps & HeadingProps;
declare const CmsCollectionDocumentsCarousel: React.FC<CmsCollectionDocumentsCarouselProps>;
export default CmsCollectionDocumentsCarousel;
