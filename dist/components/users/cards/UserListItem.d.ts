import React from 'react';
import { MetafieldType, UserType } from '../../../types';
type UserListItemProps = {
    resource: UserType;
    displayFields: MetafieldType[];
    handleClick?: () => void;
};
declare const UserListItem: React.FC<UserListItemProps>;
export default UserListItem;
