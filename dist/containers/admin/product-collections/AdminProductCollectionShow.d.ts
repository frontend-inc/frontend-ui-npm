import React from 'react';
import { ResourceShowProps } from '../../../components/cms/resources/ResourceShow';
import { DisplayFieldType } from '../../../types';
type AdminProductShowProps = ResourceShowProps & {
    metafields?: DisplayFieldType[];
};
declare const AdminProductShow: React.FC<AdminProductShowProps>;
export default AdminProductShow;
