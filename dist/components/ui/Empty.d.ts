import React from 'react';
type EmptyProps = {
    icon?: string;
    title?: string;
    description?: string;
    buttons?: any;
    variant?: 'accent' | 'default' | 'primary' | 'secondary' | 'destructive';
    fill?: boolean;
    className?: string;
};
declare const Empty: React.FC<EmptyProps>;
export default Empty;
