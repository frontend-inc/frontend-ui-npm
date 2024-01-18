import React from 'react';
type DrawerProps = {
    open: boolean;
    loading?: boolean;
    title?: string;
    anchor?: 'left' | 'right' | 'top' | 'bottom';
    handleClose?: () => void;
    actions?: any;
    children: React.ReactNode;
    closeIcon?: string;
    disablePadding?: boolean;
    hideBackdrop?: boolean;
    variant?: 'permanent' | 'persistent' | 'temporary';
    styles?: any;
    fullWidth?: boolean;
};
declare const Drawer: React.FC<DrawerProps>;
export default Drawer;
