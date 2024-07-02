import React from 'react';
import { UserType } from '../../../types';
type UserChipProps = {
    user: UserType;
    size?: number;
};
declare const UserChip: React.FC<UserChipProps>;
export default UserChip;
