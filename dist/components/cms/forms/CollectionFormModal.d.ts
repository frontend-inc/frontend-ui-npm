import React from 'react';
import { FormFieldType } from '../../../types';
export type CollectionFormModalProps = {
    fields: FormFieldType[];
    resource?: any;
};
declare const CollectionFormModal: React.FC<CollectionFormModalProps>;
export default CollectionFormModal;
