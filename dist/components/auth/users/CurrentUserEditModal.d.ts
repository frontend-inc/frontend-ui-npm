import React from 'react';
import { FormFieldType } from '../../../types';
type UserEditModalProps = {
    open: boolean;
    handleClose: () => void;
    fields: FormFieldType[];
};
declare const UserEditModal: React.FC<UserEditModalProps>;
export default UserEditModal;
