import React from 'react';
declare const useMenu: (anchorRef?: React.RefObject<any>) => {
    open: boolean;
    anchorEl: any;
    closeMenu: () => void;
    openMenu: (e: any) => void;
    toggleMenu: (e: any) => void;
};
export default useMenu;
