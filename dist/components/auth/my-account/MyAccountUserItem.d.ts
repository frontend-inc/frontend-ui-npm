import React from 'react';
import { UserType } from 'frontend-js';
type MyAccountUserItemProps = {
    user: UserType;
    selected?: boolean;
    isAdmin?: boolean;
    handleClick: () => void;
    handleEdit: (user: UserType) => void | undefined;
    handleDelete: (user: UserType) => void | undefined;
};
declare const MyAccountUserItem: React.FC<MyAccountUserItemProps>;
export default MyAccountUserItem;
