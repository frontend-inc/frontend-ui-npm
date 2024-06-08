import React from 'react';
import { DisplayFieldType } from '../../../types';
export type DetailsProps = {
    displayFields: DisplayFieldType[];
    url: string;
    resource: any;
    enableBorder?: boolean;
};
declare const Details: React.FC<DetailsProps>;
export default Details;
