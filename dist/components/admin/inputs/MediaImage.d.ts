import React from 'react';
import { ImageType } from '../../../types';
type MediaImageProps = {
    image?: ImageType;
    handleRemove: () => void;
};
declare const MediaImage: React.FC<MediaImageProps>;
export default MediaImage;
