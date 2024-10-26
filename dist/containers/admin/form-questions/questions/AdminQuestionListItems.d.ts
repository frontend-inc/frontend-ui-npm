import React from 'react';
import { ResourceListProps } from '../../../../components/cms/resources/ResourceList';
type AdminQuestionListItemsProps = ResourceListProps & {
    url: string;
    formId: string;
    handleSuccess: () => void;
};
declare const AdminQuestionListItems: React.FC<AdminQuestionListItemsProps>;
export default AdminQuestionListItems;
