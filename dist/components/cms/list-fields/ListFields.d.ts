import React from 'react';
import { MetafieldType } from '../../../types';
type ListFieldsProps = {
    fields: MetafieldType[];
    resource: any;
    direction?: 'row' | 'column';
    className?: string;
};
declare const ListFields: React.FC<ListFieldsProps>;
export default ListFields;
