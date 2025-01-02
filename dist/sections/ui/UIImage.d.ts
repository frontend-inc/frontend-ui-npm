import React from 'react';
import { ImageProps } from '../../components/ui/images/Image';
import { SectionProps } from '../../types';
type UIImageProps = SectionProps & ImageProps & {
    title?: string;
    image: string;
};
declare const UIImage: React.FC<UIImageProps>;
export default UIImage;
