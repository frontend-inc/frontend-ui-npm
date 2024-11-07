import React from 'react';
export type ImageModalProps = {
    open: boolean;
    handleClose: () => void;
    resource: any;
    enableGradient?: boolean;
};
declare const ImageModal: React.FC<ImageModalProps>;
export default ImageModal;
