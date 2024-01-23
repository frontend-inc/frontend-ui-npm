import React from 'react';
type SignInProps = {
    redirectUrl: string;
    title?: string;
    subtitle?: string;
    forgotPasswordUrl?: string;
    signupUrl?: string;
    oneTimePasswordUrl?: string;
};
declare const SignIn: React.FC<SignInProps>;
export default SignIn;
