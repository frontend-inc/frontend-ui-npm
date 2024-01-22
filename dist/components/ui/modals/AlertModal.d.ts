import React from "react";
type AlertModalProps = {
    loading?: boolean;
    title?: string;
    description?: string;
    open: boolean;
    handleClose: () => void;
    handleConfirm: any;
};
declare const AlertModal: React.FC<AlertModalProps>;
export default AlertModal;
