import React from 'react';
import { FormFieldType } from '../../../types';
export type CollectionFormProps = {
    fields: FormFieldType[];
    parentResource?: any;
};
declare const CollectionForm: React.FC<CollectionFormProps>;
export default CollectionForm;
