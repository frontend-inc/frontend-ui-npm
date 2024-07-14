import React from 'react';
import { ImageListProps } from '../../components/cms/collections/ImageList';
import { SectionProps, HeadingProps, FormProps } from '../../types';
type CmsImagesProps = SectionProps & HeadingProps & ImageListProps & FormProps;
declare const CmsImages: React.FC<CmsImagesProps>;
export default CmsImages;
