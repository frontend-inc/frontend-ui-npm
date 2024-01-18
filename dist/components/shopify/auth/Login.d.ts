import React from 'react';
type LoginProps = {
    logo: string;
    redirectUrl: string;
    title?: string;
    subtitle?: string;
    forgotPasswordUrl?: string;
    signupUrl?: string;
    oneTimePasswordUrl?: string;
};
declare const Login: React.FC<LoginProps>;
export default Login;
