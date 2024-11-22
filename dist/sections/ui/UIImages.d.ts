import React from 'react';
import { ImagesProps } from '../../components/web/images/Images';
import { SectionProps, HeadingProps } from '../../types';
type UIImagesProps = SectionProps & HeadingProps & ImagesProps;
declare const UIImages: React.FC<UIImagesProps>;
export default UIImages;
