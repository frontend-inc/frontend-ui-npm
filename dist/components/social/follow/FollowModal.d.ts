import React from 'react';
import { UserType } from '../../../types';
type FollowModalProps = {
    open: boolean;
    handleClose: () => void;
    user: UserType;
};
declare const FollowModal: React.FC<FollowModalProps>;
export default FollowModal;
