import React from 'react';
import { DisplayFieldType } from '../../../types';
export type AddonGoogleMapProps = {
    fieldName: string;
    resource: any;
    zoom?: number;
    displayFields?: DisplayFieldType[];
    darkTheme?: boolean;
};
declare const AddonGoogleMap: React.FC<AddonGoogleMapProps>;
export default AddonGoogleMap;
