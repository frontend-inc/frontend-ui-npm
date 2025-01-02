import React from 'react';
type UserAvatarProps = {
    user: any;
    variant?: 'circular' | 'rounded';
    size?: 'sm' | 'md' | 'lg';
    enableGradient?: boolean;
    className?: string;
};
declare const UserAvatar: React.FC<UserAvatarProps>;
export default UserAvatar;
