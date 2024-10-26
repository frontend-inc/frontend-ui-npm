import React from 'react';
import { UserType } from 'frontend-js';
type AuthUserListItemProps = {
    user: UserType;
    selected?: boolean;
    isAdmin?: boolean;
    handleClick: () => void;
    handleEdit: (user: UserType) => void;
    handleDelete: (user: UserType) => void;
};
declare const AuthUserListItem: React.FC<AuthUserListItemProps>;
export default AuthUserListItem;
