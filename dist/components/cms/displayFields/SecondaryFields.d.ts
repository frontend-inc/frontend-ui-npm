import React from 'react';
type SecondaryFieldsProps = {
    resource: any;
    fields: any;
    enableRatings?: boolean;
    enableUsers?: boolean;
    slots?: {
        ratings?: any;
        fields?: any;
        user?: any;
    };
};
declare const SecondaryFields: React.FC<SecondaryFieldsProps>;
export default SecondaryFields;
