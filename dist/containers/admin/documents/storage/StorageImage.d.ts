import React from 'react';
import { ImageType } from '../../../../types';
type StorageImageProps = {
    image?: ImageType;
    handleRemove: () => void;
};
declare const StorageImage: React.FC<StorageImageProps>;
export default StorageImage;
