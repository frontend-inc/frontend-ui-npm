import React from 'react';
export type LoginProps = {
    title?: string;
    subtitle?: string;
    forgotPasswordUrl?: string;
    signupUrl?: string;
    oneTimePasswordUrl?: string;
    disableUsername?: boolean;
    enableGoogle?: boolean;
    href: string;
};
declare const Login: React.FC<LoginProps>;
export default Login;
