import React from 'react';
export type GoogleMarkerType = {
    label?: string;
    image?: string;
    lat: number;
    lng: number;
};
declare const GoogleMarker: React.FC<GoogleMarkerType>;
export default GoogleMarker;
