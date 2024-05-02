import React from 'react';
type AccountFormProps = {
    loading: boolean;
    user: any;
    handleChange: (ev: any) => void;
    handleSubmit: () => void;
    handleDeleteAvatar: () => void;
    handleLogout: () => void;
};
declare const MyAccountForm: React.FC<AccountFormProps>;
export default MyAccountForm;
