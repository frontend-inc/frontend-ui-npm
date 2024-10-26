import React from 'react';
import { ResourceShowProps } from '../../../components/cms/resources/ResourceShow';
import { DisplayFieldType } from '../../../types';
type AdminUserShowProps = ResourceShowProps & {
    metafields?: DisplayFieldType[];
};
declare const AdminUserShow: React.FC<AdminUserShowProps>;
export default AdminUserShow;
