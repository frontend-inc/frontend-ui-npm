import React from 'react';
type AuthMenuProps = {
    handleLogin: () => void;
    handleLogout: () => void;
    handleSignup: () => void;
    handleMyAccount: () => void;
    handleClick: (path: string) => void;
};
declare const AuthMenu: React.FC<AuthMenuProps>;
export default AuthMenu;
