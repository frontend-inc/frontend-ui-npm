import React from 'react';
import { CoverCarouselProps } from '../../components/web/covers/CoverCarousel';
import { SectionProps } from '../../types';
type UICoverCarouselProps = SectionProps & CoverCarouselProps;
declare const UICoverCarousel: React.FC<UICoverCarouselProps>;
export default UICoverCarousel;
