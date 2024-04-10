import React from 'react';
import { CoverImageCarouselProps } from '../../components/web/covers/CoverImageCarousel';
import { SectionProps } from '../../types';
type WebCoverImageCarouselProps = SectionProps & CoverImageCarouselProps;
declare const WebCoverImageCarousel: React.FC<WebCoverImageCarouselProps>;
export default WebCoverImageCarousel;
