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
export default function GoogleMap({ darkTheme, height, width, resources, zoom, enableBorder, displayFields, }: GoogleMapProps): React.JSX.Element;
