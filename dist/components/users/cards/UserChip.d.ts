import React from 'react';
import { UserType } from '../../../types';
type UserChipProps = {
    user: UserType;
    enableUsername?: boolean;
    enableEmail?: boolean;
    size?: number;
};
export default function UserChip({ user, enableEmail, enableUsername, size, }: UserChipProps): React.JSX.Element;
export {};
