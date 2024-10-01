import React from 'react';
import { ImageType } from '../../../types';
type MediaInputProps = {
    name: string;
    value: ImageType;
    objectFit?: 'cover' | 'contain';
    handleAddAttachment: (field: string, id: number) => void;
    handleRemoveAttachment: (field: string) => void;
};
declare const MediaInput: React.FC<MediaInputProps>;
export default MediaInput;
