import React from 'react';
import { UserType } from 'frontend-js';
type FollowButtonProps = {
    user: UserType;
    color?: string;
};
declare const FollowButton: React.FC<FollowButtonProps>;
export default FollowButton;
