import React from 'react';
type SignupProps = {
    logo: string;
    redirectUrl: string;
    loginUrl: string;
    title?: string;
    subtitle?: string;
    authConfig?: Record<string, any>;
};
declare const Signup: React.FC<SignupProps>;
export default Signup;
