import React from 'react';
import { QueryParamsType } from 'frontend-js';
export type DataReferencesProps = {
    url: string;
    query?: QueryParamsType;
};
declare const DataReferences: React.FC<DataReferencesProps>;
export default DataReferences;
