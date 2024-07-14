import React from 'react';
export type ShowImageModalProps = {
    open: boolean;
    handleClose: () => void;
    enableGradient?: boolean;
};
declare const ShowImageModal: React.FC<ShowImageModalProps>;
export default ShowImageModal;
