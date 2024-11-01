import React from 'react';
import { ResourceHeaderProps } from '../../../components/cms/resources/ResourceHeader';
type AdminDocumentHeaderProps = ResourceHeaderProps & {
    collectionId: string;
};
declare const AdminDocumentHeader: React.FC<AdminDocumentHeaderProps>;
export default AdminDocumentHeader;
