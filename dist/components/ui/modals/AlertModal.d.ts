import React from 'react';
type AlertModalProps = {
    loading?: boolean;
    title?: string;
    description?: string;
    icon?: string;
    open: boolean;
    handleClose: () => void;
    handleConfirm: () => void;
};
declare const AlertModal: React.FC<AlertModalProps>;
export default AlertModal;
