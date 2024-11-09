import React from 'react';
export type EmailSubscribeProps = {
    label?: string;
    title: string;
    subtitle: string;
    buttonText?: string;
    href?: string;
    handleClick?: () => void;
    direction?: string;
};
declare const EmailSubscribe: React.FC<EmailSubscribeProps>;
export default EmailSubscribe;
