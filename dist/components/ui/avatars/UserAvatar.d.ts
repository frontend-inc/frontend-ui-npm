import React from "react";
import { User } from "lucide-react";
type User = {
    name: string;
    avatar: {
        url: string;
    };
};
type UserAvatarProps = {
    user: User;
    label?: string;
    handleClick?: () => void;
};
declare const UserAvatar: React.FC<UserAvatarProps>;
export default UserAvatar;
