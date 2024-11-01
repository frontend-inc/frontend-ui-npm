import React from 'react';
import { DisplayFieldType } from '../../../types';
type AdminDocumentListProps = {
    collectionId: string;
    fields?: DisplayFieldType[];
};
declare const AdminDocumentsList: React.FC<AdminDocumentListProps>;
export default AdminDocumentsList;
