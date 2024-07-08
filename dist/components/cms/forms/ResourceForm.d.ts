import React from 'react';
import { FormFieldType } from '../../../types';
export type ResourceFormProps = {
    fields: FormFieldType[];
    resource?: any;
};
declare const ResourceForm: React.FC<ResourceFormProps>;
export default ResourceForm;
