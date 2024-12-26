import React from 'react';
type SheetProps = {
    open: boolean;
    loading?: boolean;
    title?: string;
    side?: 'left' | 'right';
    handleClose: () => void;
    buttons?: React.ReactNode;
    children: React.ReactNode;
    disablePadding?: boolean;
    mode?: string;
    className?: string;
    fullWidth?: boolean;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};
declare const Sheet: React.FC<SheetProps>;
export default Sheet;
