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
    className?: string;
};
export default function Modal(props: ModalProps): React.JSX.Element;
export {};
