import React from 'react';
type LoginProps = {
    logo: string;
    redirectUrl: string;
    title?: string;
    subtitle?: string;
    forgotPasswordUrl?: string;
    signupUrl?: string;
    oneTimePasswordUrl?: string;
    disableUsername?: boolean;
};
declare const Login: React.FC<LoginProps>;
export default Login;
