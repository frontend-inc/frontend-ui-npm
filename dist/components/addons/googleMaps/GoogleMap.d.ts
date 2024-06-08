import React from 'react';
import { DisplayFieldType } from '../../../types';
export type GoogleMapProps = {
    darkTheme?: boolean;
    resources: any[];
    height?: number;
    width?: number | string;
    zoom?: number;
    enableBorder?: boolean;
    displayFields?: DisplayFieldType[];
};
declare const GoogleMap: React.FC<GoogleMapProps>;
export default GoogleMap;
