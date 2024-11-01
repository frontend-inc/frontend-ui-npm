import React from 'react';
import { ResourceShowProps } from '../../../components/cms/resources/ResourceShow';
import { DisplayFieldType } from '../../../types';
type AdminDocumentShowProps = ResourceShowProps & {
    fields?: DisplayFieldType[];
};
declare const AdminDocumentShow: React.FC<AdminDocumentShowProps>;
export default AdminDocumentShow;
