import React from 'react';
type UseMenuProps = {
    anchorRef?: React.RefObject<any>;
};
declare const useMenu: (props?: UseMenuProps) => {
    open: boolean;
    anchorEl: any;
    closeMenu: () => void;
    openMenu: (e: any) => void;
    toggleMenu: (e: any) => void;
};
export default useMenu;
