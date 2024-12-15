import React from 'react';
import { DocumentCarouselListProps } from '../../components/cms/documents/DocumentCarouselList';
import { SectionProps, HeadingProps } from '../../types';
type CmsCarouselProps = SectionProps & HeadingProps & DocumentCarouselListProps;
declare const CmsCarousel: React.FC<CmsCarouselProps>;
export default CmsCarousel;
