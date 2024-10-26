import React from 'react';
import { ImageType } from '../../../types';
type MediaImageProps = {
    image: ImageType;
    objectFit?: 'cover' | 'contain';
    handleRemove: () => void;
};
declare const MediaImage: React.FC<MediaImageProps>;
export default MediaImage;
