import React from 'react';
import { CarouselListProps } from '../../components/cms/collections/CarouselList';
import { SectionProps, HeadingProps } from '../../types';
type CmsCarouselProps = SectionProps & HeadingProps & CarouselListProps;
declare const CmsCarousel: React.FC<CmsCarouselProps>;
export default CmsCarousel;
