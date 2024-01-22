import React from "react";
type AccountFormProps = {
    user: any;
    handleChange: (ev: any) => void;
    handleSubmit: () => void;
    handleRedirect: () => void;
    handleDeleteAvatar: () => void;
};
declare const MyAccountForm: React.FC<AccountFormProps>;
export default MyAccountForm;
