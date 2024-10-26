import React from 'react';
import { ResourceShowProps } from '../../../components/cms/resources/ResourceShow';
type AdminFormResponseShowProps = ResourceShowProps & {
    formId: string | number;
};
declare const AdminFormResponseShow: React.FC<AdminFormResponseShowProps>;
export default AdminFormResponseShow;
