import React from 'react';
import { QueryParamsType } from 'frontend-js';
type DataReferenceFormProps = {
    errors?: any;
    url: string;
    resource: any;
    handleChange: (ev: any) => void;
    query?: QueryParamsType;
};
declare const DataReferenceForm: React.FC<DataReferenceFormProps>;
export default DataReferenceForm;
