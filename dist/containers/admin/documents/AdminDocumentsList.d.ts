import React from 'react';
import { DocumentTypes, MetafieldType } from '../../../types';
type AdminDocumentListProps = {
    documentType: DocumentTypes;
    collectionId: string;
    metafields?: MetafieldType[];
};
declare const AdminDocumentsList: React.FC<AdminDocumentListProps>;
export default AdminDocumentsList;
