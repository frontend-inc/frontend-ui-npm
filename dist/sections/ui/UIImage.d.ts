import React from 'react';
import { ResponsiveImageProps } from '../../components/ui/images/Image';
import { SectionProps } from '../../types';
type UIImageProps = SectionProps & ResponsiveImageProps & {
    title?: string;
    image: string;
};
declare const UIImage: React.FC<UIImageProps>;
export default UIImage;
