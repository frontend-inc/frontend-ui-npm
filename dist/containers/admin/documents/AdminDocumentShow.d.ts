import React from 'react';
import { ResourceShowProps } from '../../../components/cms/resources/ResourceShow';
import { MetafieldType } from '../../../types';
type AdminDocumentShowProps = ResourceShowProps & {
    fields?: MetafieldType[];
};
declare const AdminDocumentShow: React.FC<AdminDocumentShowProps>;
export default AdminDocumentShow;
