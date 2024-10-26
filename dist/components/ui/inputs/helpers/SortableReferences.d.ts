import React from 'react';
import { ReferenceType } from '../../../../types';
type SortableReferencesProps = {
    references: ReferenceType[];
    handleDrop: (sorted: any) => void;
    handleDelete: (resource: any) => void;
    handleEdit: (resource: any) => void;
};
declare const SortableReferences: React.FC<SortableReferencesProps>;
export default SortableReferences;
