import React from 'react';
import { ResourceShowProps } from '../../../components/cms/resources/ResourceShow';
import { DisplayFieldType } from '../../../types';
type AdminQuestionShowProps = ResourceShowProps & {
    metafields?: DisplayFieldType[];
};
declare const AdminQuestionShow: React.FC<AdminQuestionShowProps>;
export default AdminQuestionShow;
