import React from 'react';
type AuthMenuProps = {
    handleLogin: () => void;
    handleSignup: () => void;
    handleMyAccount: () => void;
    menuItems?: {
        icon?: string;
        label: string;
        path: string;
        onClick?: () => void;
    }[];
};
declare const AuthMenu: React.FC<AuthMenuProps>;
export default AuthMenu;
