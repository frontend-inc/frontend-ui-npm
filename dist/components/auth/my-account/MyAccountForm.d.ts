import React from 'react';
import { MetafieldType } from '../../../types';
type MyAccountFormProps = {
    loading?: boolean;
    errors?: any;
    user: any;
    metafields?: MetafieldType[];
    handleChange: (ev: any) => void;
    handleSubmit: () => void;
    handleDeleteAvatar: () => void;
    handleLogout: () => void;
};
declare const MyAccountForm: React.FC<MyAccountFormProps>;
export default MyAccountForm;
