import React from 'react';
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm';
import { MetafieldType } from '../../../types';
type AdminUserFormProps = ResourceFormProps & {
    metafields?: MetafieldType[];
};
declare const AdminUserForm: React.FC<AdminUserFormProps>;
export default AdminUserForm;
