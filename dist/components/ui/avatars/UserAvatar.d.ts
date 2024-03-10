import React from 'react';
type UserAvatarType = {
    name: string;
    avatar: {
        url: string;
    };
};
type UserAvatarProps = {
    user: UserAvatarType;
    label?: string;
    handleClick?: () => void;
};
declare const UserAvatar: React.FC<UserAvatarProps>;
export default UserAvatar;
