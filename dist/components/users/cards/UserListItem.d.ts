import React from 'react';
import { DisplayFieldType, SocialFieldType, UserType } from '../../../types';
type UserListItemProps = {
    size?: number;
    resource: UserType;
    displayFields: DisplayFieldType[];
    socialFields: SocialFieldType[];
    enableFollowers?: boolean;
    handleClick?: () => void;
};
declare const UserListItem: React.FC<UserListItemProps>;
export default UserListItem;
