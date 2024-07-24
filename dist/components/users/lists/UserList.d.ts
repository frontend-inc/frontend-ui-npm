import React from 'react';
import { DisplayFieldType, SocialFieldType, UserType } from '../../../types';
export type UserListProps = {
    user: UserType;
    url?: string;
    href?: string;
    enableLocation?: boolean;
    enableFollowers?: boolean;
    displayFields: DisplayFieldType[];
    socialFields: SocialFieldType[];
};
declare const UserList: React.FC<UserListProps>;
export default UserList;
