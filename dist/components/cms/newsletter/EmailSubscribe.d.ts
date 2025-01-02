import React from 'react';
export type EmailSubscribeProps = {
    label?: string;
    buttonText?: string;
    href?: string;
    handleClick?: () => void;
    direction?: string;
    size?: 'sm' | 'md' | 'lg';
};
declare const EmailSubscribe: React.FC<EmailSubscribeProps>;
export default EmailSubscribe;
