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
};
export default function CustomDrawer({ open, handleClose, loading, title, description, children, buttons, maxWidth, }: CustomDrawerProps): React.JSX.Element;
export {};
