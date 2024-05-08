import React from 'react';
import { UserType } from 'frontend-js';
type UserListItemProps = {
    user: UserType;
    selected?: boolean;
    isAdmin?: boolean;
    handleClick?: (user: UserType) => void | undefined;
    handleEdit?: (user: UserType) => void | undefined;
    handleDelete?: (user: UserType) => void | undefined;
};
declare const UserListItem: React.FC<UserListItemProps>;
export default UserListItem;
