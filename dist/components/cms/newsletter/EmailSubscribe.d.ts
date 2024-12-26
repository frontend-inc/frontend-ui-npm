import React from 'react';
export type EmailSubscribeProps = {
    buttonText?: string;
    href?: string;
    handleClick?: () => void;
    direction?: string;
    size?: 'sm' | 'default' | 'lg';
};
declare const EmailSubscribe: React.FC<EmailSubscribeProps>;
export default EmailSubscribe;
