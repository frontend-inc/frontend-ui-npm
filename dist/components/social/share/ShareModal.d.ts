import React from 'react';
type ShareButtonProps = {
    url: string;
    open: boolean;
    handleClose: () => void;
};
export default function ShareButton({ open, handleClose, url, }: ShareButtonProps): React.JSX.Element;
export {};
