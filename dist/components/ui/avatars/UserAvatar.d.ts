import React from 'react';
type UserAvatarProps = {
    user: any;
    variant?: 'circular' | 'rounded';
    size?: number;
    enableGradient?: boolean;
    className?: string;
};
declare const UserAvatar: React.FC<UserAvatarProps>;
export default UserAvatar;
