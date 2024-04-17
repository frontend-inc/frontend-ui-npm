import React from 'react';
type LoginProps = {
    redirectUrl: string;
    title?: string;
    subtitle?: string;
    forgotPasswordUrl?: string;
    signupUrl?: string;
    oneTimePasswordUrl?: string;
    disableUsername?: boolean;
    enableGoogle?: boolean;
};
declare const Login: React.FC<LoginProps>;
export default Login;
