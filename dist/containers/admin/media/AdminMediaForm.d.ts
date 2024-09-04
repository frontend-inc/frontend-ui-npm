import React from 'react';
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm';
type AdminMediaFormProps = ResourceFormProps & {
    unsplashApiKey: string;
};
declare const AdminMediaForm: React.FC<AdminMediaFormProps>;
export default AdminMediaForm;
