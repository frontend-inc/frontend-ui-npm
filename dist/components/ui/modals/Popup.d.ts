import React from 'react';
import { PopoverOrigin } from '@mui/material';
type PopupProps = {
    open: boolean;
    handleClose: () => void;
    anchorEl: any;
    children: any;
    disablePadding?: boolean;
    p?: number;
    anchorOrigin?: PopoverOrigin;
    transformOrigin?: PopoverOrigin;
};
declare const Popup: React.FC<PopupProps>;
export default Popup;
