import React from 'react';
type ModalProps = {
    open: boolean;
    loading?: boolean;
    handleClose: () => void;
    icon?: string;
    title?: string | React.ReactNode;
    description?: string;
    buttons?: React.ReactNode;
    children?: React.ReactNode;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    secondaryActions?: React.ReactNode;
};
export default function Modal({ open, loading, handleClose, title, buttons, children, description, }: ModalProps): React.JSX.Element;
export {};
