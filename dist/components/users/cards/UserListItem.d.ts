import React from 'react';
import { DisplayFieldType, UserType } from '../../../types';
type UserListItemProps = {
    size?: number;
    resource: UserType;
    displayFields: DisplayFieldType[];
    handleClick?: () => void;
};
declare const UserListItem: React.FC<UserListItemProps>;
export default UserListItem;
