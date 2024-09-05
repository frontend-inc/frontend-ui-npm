import React from 'react';
import { ImageType } from '../../../../types';
type StorageInputProps = {
    name: string;
    value: ImageType;
    handleAddAttachment: (field: string, id: number) => void;
    handleRemoveAttachment: (field: string) => void;
};
declare const StorageInput: React.FC<StorageInputProps>;
export default StorageInput;
