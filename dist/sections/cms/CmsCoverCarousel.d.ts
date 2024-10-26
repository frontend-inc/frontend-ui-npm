import React from 'react';
import { CarouselListProps } from '../../components/cms/collections/CarouselList';
import { SectionProps } from '../../types';
type CmsCoverCarouselProps = SectionProps & CarouselListProps;
declare const CmsCoverCarousel: React.FC<CmsCoverCarouselProps>;
export default CmsCoverCarousel;
