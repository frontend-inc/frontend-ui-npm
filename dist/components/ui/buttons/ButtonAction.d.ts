import React from 'react';
type ButtonActionProps = {
    icon?: string;
    variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'link';
    size?: 'sm' | 'default' | 'lg';
    url?: string;
    path?: string;
    children: React.ReactNode;
};
declare const ButtonAction: React.FC<ButtonActionProps>;
export default ButtonAction;
