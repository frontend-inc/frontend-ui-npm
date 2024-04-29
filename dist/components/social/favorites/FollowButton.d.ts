import React from 'react';
type FollowButtonProps = {
    following: boolean;
    loading: boolean;
    handleClick: () => void;
};
declare const FollowButton: React.FC<FollowButtonProps>;
export default FollowButton;
