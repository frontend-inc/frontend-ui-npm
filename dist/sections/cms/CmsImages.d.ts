import React from 'react';
import { ImageGridProps } from '../../components/cms/collections/ImageGrid';
import { SectionProps, HeadingProps, FormProps } from '../../types';
type CmsImagesProps = SectionProps & HeadingProps & ImageGridProps & FormProps;
declare const CmsImages: React.FC<CmsImagesProps>;
export default CmsImages;
