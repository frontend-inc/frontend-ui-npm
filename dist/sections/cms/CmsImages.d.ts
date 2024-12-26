import React from 'react';
import { ImageListProps } from '../../components/cms/documents/ImageList';
import { SectionProps, HeadingProps } from '../../types';
type CmsImagesProps = SectionProps & HeadingProps & ImageListProps;
declare const CmsImages: React.FC<CmsImagesProps>;
export default CmsImages;
