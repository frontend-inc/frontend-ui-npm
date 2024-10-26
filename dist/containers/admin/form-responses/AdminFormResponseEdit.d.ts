import React from 'react';
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm';
type AdminFormResponseEditProps = ResourceFormProps & {
    formId: string;
};
declare const AdminFormResponseEdit: React.FC<AdminFormResponseEditProps>;
export default AdminFormResponseEdit;
