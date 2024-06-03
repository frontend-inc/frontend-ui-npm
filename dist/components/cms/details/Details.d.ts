import React from 'react';
export type DetailsProps = {
    fields: any[];
    url: string;
    resource: any;
    enableBorder?: boolean;
};
declare const Details: React.FC<DetailsProps>;
export default Details;
