import React from 'react';
export type FieldGoogleMapProps = {
    value: string;
    lat: number;
    lng: number;
    label: string;
    image?: string;
    zoom?: number;
};
declare const FieldGoogleMap: React.FC<FieldGoogleMapProps>;
export default FieldGoogleMap;
