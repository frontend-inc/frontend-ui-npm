import React from 'react';
type ActionProps = {
    icon?: string;
    color?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    url?: string;
    path?: string;
    children: React.ReactNode;
};
declare const ButtonAction: React.FC<ActionProps>;
export default ButtonAction;
