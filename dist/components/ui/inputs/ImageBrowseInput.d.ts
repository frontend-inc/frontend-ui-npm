import React from 'react';
type ImageInputProps = {
    name: string;
    label: string;
    value: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleBrowse: (name: string) => void;
    placeholder?: string;
    errors?: string;
};
declare const ImageInput: React.FC<ImageInputProps>;
export default ImageInput;
