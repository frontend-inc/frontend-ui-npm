import React from 'react';
type AuthProps = {
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
declare const Auth: React.FC<AuthProps>;
export default Auth;
