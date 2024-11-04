import React from 'react';
export type GoogleMapProps = {
    darkTheme?: boolean;
    resources: any[];
    height?: number;
    width?: number | string;
    zoom?: number;
    enableBorder?: boolean;
};
export default function GoogleMap({ darkTheme, height, width, resources, zoom, enableBorder, }: GoogleMapProps): React.JSX.Element;
