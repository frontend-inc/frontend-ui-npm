import React from 'react';
type UserMenuProps = {
    open: boolean;
    anchorEl: HTMLElement | null;
    toggleMenu: (ev: any) => void;
    handleLogoutClick: () => void;
    children?: React.ReactNode;
    handleClick: () => void;
};
declare const UserMenu: React.FC<UserMenuProps>;
export default UserMenu;
