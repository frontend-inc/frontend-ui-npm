import React from 'react';
import { ResourceShowProps } from '../../../components/cms/resources/ResourceShow';
import { DisplayFieldType } from '../../../types';
type AdminFormShowProps = ResourceShowProps & {
    metafields?: DisplayFieldType[];
};
declare const AdminFormShow: React.FC<AdminFormShowProps>;
export default AdminFormShow;
