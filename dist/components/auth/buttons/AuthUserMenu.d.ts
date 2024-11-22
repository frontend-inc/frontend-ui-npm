import React from 'react';
type UserMenuProps = {
    handleLogoutClick: () => void;
    children?: React.ReactNode;
    handleClick: () => void;
};
declare const UserMenu: React.FC<UserMenuProps>;
export default UserMenu;
