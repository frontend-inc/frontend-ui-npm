import React from 'react';
import { MetafieldType } from '../../../types';
type ShowFieldsProps = {
    fields: MetafieldType[];
    resource: any;
    className?: string;
};
declare const ShowFields: React.FC<ShowFieldsProps>;
export default ShowFields;
