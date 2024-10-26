import React from 'react';
import { FormFieldType } from '../../../types';
export type CurrentUserFormProps = {
    loading?: boolean;
    href?: string;
    buttonText?: string;
    fields: FormFieldType[];
    onSuccessMessage?: string;
    handleSuccess?: (resource: any) => void;
};
declare const UserForm: React.FC<CurrentUserFormProps>;
export default UserForm;
