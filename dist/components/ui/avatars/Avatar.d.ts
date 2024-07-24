import React from 'react';
type UserAvatarProps = {
    src: string;
    label?: string;
    size?: number;
    color?: string;
    enableGradient?: boolean;
    enableOverlay?: boolean;
};
declare const Avatar: React.FC<UserAvatarProps>;
export default Avatar;
