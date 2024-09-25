import React from 'react';
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm';
type AdminFormQuestionsAddProps = ResourceFormProps & {
    url: string;
    formId: string;
};
declare const AdminFormQuestionsAdd: React.FC<AdminFormQuestionsAddProps>;
export default AdminFormQuestionsAdd;
