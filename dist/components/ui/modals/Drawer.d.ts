import React from 'react';
type CustomDrawerProps = {
    open: boolean;
    handleClose: (open: boolean) => void;
    loading?: boolean;
    title?: string;
    description?: string;
    buttons?: React.ReactNode;
    children: React.ReactNode;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
};
export default function CustomDrawer(props: CustomDrawerProps): React.JSX.Element;
export {};
