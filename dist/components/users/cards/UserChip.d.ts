import React from 'react';
import { UserType } from '../../../types';
type UserChipProps = {
    user: UserType;
    enableUsername?: boolean;
    enableEmail?: boolean;
    size?: number;
};
declare const UserChip: React.FC<UserChipProps>;
export default UserChip;
