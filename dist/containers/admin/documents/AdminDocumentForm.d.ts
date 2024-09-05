import React from 'react';
import { FieldType, SyntheticEventType } from '../../../types';
type AdminDocumentFormProps = {
    errors?: any;
    fields: FieldType[];
    document: any;
    collection: any;
    handleChange: (e: SyntheticEventType) => void;
    handleAddReferences: (items: any[]) => void;
    handleRemoveReferences: (items: any[]) => void;
    handleAddAttachment: (field: string, id: number) => void;
    handleRemoveAttachment: (field: string) => void;
};
declare const AdminDocumentForm: React.FC<AdminDocumentFormProps>;
export default AdminDocumentForm;
