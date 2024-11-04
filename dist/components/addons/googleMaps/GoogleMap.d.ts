import React from 'react';
export type GoogleMapProps = {
    darkTheme?: boolean;
    lat: number;
    lng: number;
    label: string;
    image?: string;
    height?: number;
    width?: number | string;
    zoom?: number;
    enableBorder?: boolean;
};
export default function GoogleMap({ darkTheme, height, width, lat, lng, label, image, zoom, enableBorder, }: GoogleMapProps): React.JSX.Element;
