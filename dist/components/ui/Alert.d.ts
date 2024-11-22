import React from 'react';
type AlertProps = {
    icon?: string;
    title?: string;
    description?: string;
    buttons?: any;
    variant?: 'accent' | 'default' | 'primary' | 'secondary' | 'destructive';
    className?: string;
};
declare const Alert: React.FC<AlertProps>;
export default Alert;
