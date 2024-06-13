import React from 'react';
import { UserType } from '../../../types';
type UserButtonProps = {
    user: UserType;
    size?: number;
    handleClick?: () => void;
};
declare const UserButton: React.FC<UserButtonProps>;
export default UserButton;
