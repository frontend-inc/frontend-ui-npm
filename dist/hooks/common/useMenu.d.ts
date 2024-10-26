import React from 'react';
declare const useMenu: (anchorRef?: React.RefObject<any>) => {
    open: boolean;
    anchorEl: any;
    closeMenu: () => void;
    openMenu: (ev?: any) => void;
    toggleMenu: (ev?: any) => void;
};
export default useMenu;
