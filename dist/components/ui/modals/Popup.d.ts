import React from "react";
type PopupProps = {
    open: boolean;
    handleClose: () => void;
    anchorEl: any;
    children: any;
    disablePadding?: boolean;
    p?: number;
};
declare const Popup: React.FC<PopupProps>;
export default Popup;
