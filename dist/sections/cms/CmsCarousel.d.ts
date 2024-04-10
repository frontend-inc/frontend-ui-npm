import React from 'react';
import { CollectionCarouselProps } from '../../components/cms/collections/CollectionCarousel';
import { SectionProps, HeadingProps } from '../../types';
type CmsCarouselProps = SectionProps & HeadingProps & CollectionCarouselProps;
declare const CmsCarousel: React.FC<CmsCarouselProps>;
export default CmsCarousel;
