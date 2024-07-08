import React from 'react';
import { ForeignCollectionCarouselProps } from '../../components/cms/collections/ForeignCollectionCarousel';
import { SectionProps, HeadingProps } from '../../types';
type CmsForeignCarouselProps = SectionProps & HeadingProps & ForeignCollectionCarouselProps;
declare const CmsForeignCarousel: React.FC<CmsForeignCarouselProps>;
export default CmsForeignCarousel;
