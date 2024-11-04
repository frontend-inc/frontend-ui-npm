import React from 'react';
import { SocialFieldType, MetafieldType, ButtonType } from '../../../types';
import { UserType } from 'frontend-js';
export type UserProfileProps = {
    user: UserType;
    displayFields?: MetafieldType[];
    socialFields?: SocialFieldType[];
    buttons?: ButtonType[];
};
declare const UserProfile: React.FC<UserProfileProps>;
export default UserProfile;
