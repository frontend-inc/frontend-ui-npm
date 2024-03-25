import React from 'react';
type ModalProps = {
    open: boolean;
    loading?: boolean;
    handleClose: () => void;
    title?: string;
    subtitle?: string;
    actions?: any;
    children?: any;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
    secondaryActions?: any;
    disablePadding?: boolean;
    fullScreen?: boolean;
    enableCancel?: boolean;
    hideBackdrop?: boolean;
};
declare const Modal: React.FC<ModalProps>;
export default Modal;
