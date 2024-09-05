import React from 'react';
import { UnsplashImageType } from '../../../../types';
type UnsplashViewerModalProps = {
    open: boolean;
    loading: boolean;
    image: UnsplashImageType;
    handleUpload: (url: string, filename: string) => void;
    handleClose: () => void;
};
declare const UnsplashModal: React.FC<UnsplashViewerModalProps>;
export default UnsplashModal;
