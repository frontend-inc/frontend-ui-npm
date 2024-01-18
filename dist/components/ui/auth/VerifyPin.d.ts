import React from 'react';
type VerifyPinProps = {
    logo: string;
    title?: string;
    subtitle?: string;
    redirectUrl: string;
    loginUrl: string;
    authConfig?: Record<string, any>;
};
declare const VerifyPin: React.FC<VerifyPinProps>;
export default VerifyPin;
