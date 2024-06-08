import React from 'react';
import { GoogleMarkerType, DisplayFieldType } from '../../../types';
export type GoogleMarkerProps = {
    marker: GoogleMarkerType;
    displayFields: DisplayFieldType[];
};
declare const GoogleMarker: React.FC<GoogleMarkerProps>;
export default GoogleMarker;
