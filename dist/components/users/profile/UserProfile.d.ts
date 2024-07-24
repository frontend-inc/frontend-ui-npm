import React from 'react';
import { SocialFieldType, DisplayFieldType, ActionType } from '../../../types';
import { UserType } from 'frontend-js';
export type UserProfileProps = {
    user: UserType;
    enableFollowers?: boolean;
    displayFields?: DisplayFieldType[];
    socialFields?: SocialFieldType[];
    actions?: ActionType[];
};
declare const UserProfile: React.FC<UserProfileProps>;
export default UserProfile;
