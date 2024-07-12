import React from 'react';
import { FormFieldType } from '../../../types';
export type CollectionFormModalProps = {
    fields: FormFieldType[];
    parentResource?: any;
};
declare const CollectionFormModal: React.FC<CollectionFormModalProps>;
export default CollectionFormModal;
