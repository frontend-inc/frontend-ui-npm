import React from 'react';
export type ShowVideoModalProps = {
    open: boolean;
    handleClose: () => void;
    resource: any;
};
declare const ShowVideoModal: React.FC<ShowVideoModalProps>;
export default ShowVideoModal;
