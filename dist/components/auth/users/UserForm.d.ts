import React from 'react';
export type UserFormProps = {
    loading?: boolean;
    href?: string;
    buttonText?: string;
    fields: any[];
    onSuccessMessage?: string;
    handleSuccess?: (resource: any) => void;
};
declare const UserForm: React.FC<UserFormProps>;
export default UserForm;
