import React from 'react';
import { DisplayFieldType, UserType } from '../../../types';
export type UserProfileProps = {
    user: UserType;
    href: string;
    enableFollowing?: boolean;
    enableBorder?: boolean;
    displayFields?: DisplayFieldType[];
};
declare const UserProfile: React.FC<UserProfileProps>;
export default UserProfile;
