import React from 'react';
export type MediaModalProps = {
    open: boolean;
    handleClose: () => void;
    children: React.ReactNode;
};
export default function MediaModal({ open, handleClose, children, }: MediaModalProps): React.JSX.Element;
