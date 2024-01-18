import React from 'react';
type AuthScreenProps = {
    title: string;
    subtitle?: string;
    logo?: string;
    children: React.ReactNode;
};
declare const AuthScreen: React.FC<AuthScreenProps>;
export default AuthScreen;
