import React from 'react';
export type ShowImageModalProps = {
    open: boolean;
    handleClose: () => void;
    children: React.ReactNode;
};
declare const MediaModal: React.FC<ShowImageModalProps>;
export default MediaModal;
