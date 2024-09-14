import React from 'react';
import { SocialFieldType, DisplayFieldType, ButtonType } from '../../../types';
import { UserType } from 'frontend-js';
export type UserProfileProps = {
    user: UserType;
    displayFields?: DisplayFieldType[];
    socialFields?: SocialFieldType[];
    buttons?: ButtonType[];
};
declare const UserProfile: React.FC<UserProfileProps>;
export default UserProfile;
