import React from 'react';
import { MetafieldType } from '../../../types';
export type DetailsProps = {
    displayFields: MetafieldType[];
    url: string;
    resource: any;
    enableBorder?: boolean;
};
declare const Details: React.FC<DetailsProps>;
export default Details;
