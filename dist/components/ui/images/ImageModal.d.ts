import React from 'react';
type ImageModalProps = {
    open: boolean;
    image: any;
    title?: string;
    handleClose: () => void;
};
declare const ImageModal: React.FC<ImageModalProps>;
export default ImageModal;
