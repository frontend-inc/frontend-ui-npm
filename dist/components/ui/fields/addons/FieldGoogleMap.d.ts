import React from 'react';
import { DisplayFieldType } from '../../../../types';
export type FieldGoogleMapProps = {
    fieldName: string;
    resource: any;
    zoom?: number;
    displayFields?: DisplayFieldType[];
    darkTheme?: boolean;
};
declare const FieldGoogleMap: React.FC<FieldGoogleMapProps>;
export default FieldGoogleMap;
