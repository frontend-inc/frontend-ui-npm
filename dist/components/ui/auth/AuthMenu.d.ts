import React from "react";
type AuthMenuProps = {
    open: boolean;
    anchorEl: HTMLElement | null;
    toggleMenu: (e: any) => void;
    handleLogin: () => void;
    handleLogout: () => void;
    handleSignup: () => void;
    handleMyAccount: () => void;
    handleClick: (path: string) => void;
};
declare const AuthMenu: React.FC<AuthMenuProps>;
export default AuthMenu;
