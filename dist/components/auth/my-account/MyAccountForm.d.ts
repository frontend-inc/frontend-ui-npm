import React from 'react';
type MyAccountFormProps = {
    loading?: boolean;
    errors?: any;
    user: any;
    handleChange: (ev: any) => void;
    handleSubmit: () => void;
    handleDeleteAvatar: () => void;
};
declare const MyAccountForm: React.FC<MyAccountFormProps>;
export default MyAccountForm;
