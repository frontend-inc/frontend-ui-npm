import React from 'react';
export type ImageModalProps = {
    open: boolean;
    handleClose: () => void;
    title?: string;
    src: string;
    enableGradient?: boolean;
};
declare const ImageModal: React.FC<ImageModalProps>;
export default ImageModal;
