import React from 'react';
import { UserType } from '../../../types';
export type UserProfileProps = {
    user: UserType;
    href: string;
    enableFollowing?: boolean;
    enableBorder?: boolean;
};
declare const UserProfile: React.FC<UserProfileProps>;
export default UserProfile;
