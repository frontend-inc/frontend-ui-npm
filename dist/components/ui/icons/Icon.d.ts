import React from 'react';
type IconProps = {
    name: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    variant?: 'solid' | 'ghost' | 'light';
    color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'foreground' | 'background' | 'content1' | 'content2';
    className?: string;
};
declare const Icon: React.FC<IconProps>;
export default Icon;
