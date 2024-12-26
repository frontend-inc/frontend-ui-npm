import React from 'react';
export type ShowImageModalProps = {
    open: boolean;
    handleClose: () => void;
    resource: any;
    enableGradient?: boolean;
};
declare const ShowImageModal: React.FC<ShowImageModalProps>;
export default ShowImageModal;
