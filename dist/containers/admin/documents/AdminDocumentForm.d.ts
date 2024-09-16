import React from 'react';
import { FieldType, ProductType } from '../../../types';
type AdminDocumentFormProps = {
    errors?: any;
    fields: FieldType[];
    document: any;
    collection: any;
    handleChange: (e: any) => void;
    handleAddReferences: (items: any[]) => void;
    handleRemoveReferences: (items: any[]) => void;
    handleAddAttachment: (field: string, id: number) => void;
    handleRemoveAttachment: (field: string) => void;
    handleAddProducts: (products: ProductType[]) => void;
    handleRemoveProducts: (products: ProductType[]) => void;
    handleUpdateProductPositions: (sorted: number[]) => void;
};
declare const AdminDocumentForm: React.FC<AdminDocumentFormProps>;
export default AdminDocumentForm;
