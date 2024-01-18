import React from 'react';
type ToolbarProps = {
    open: boolean;
    handleClose: () => void;
    children: React.ReactNode;
};
declare const Toolbar: React.FC<ToolbarProps>;
export default Toolbar;
