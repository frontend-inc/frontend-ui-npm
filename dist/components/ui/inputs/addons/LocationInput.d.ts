import React from 'react';
import { TextInputPropsType } from '../../../../types';
type LocationInputProps = TextInputPropsType & {
    enablePosition?: boolean;
    lat?: number;
    lng?: number;
    height?: number;
    width?: number;
    zoom?: number;
    darkTheme?: boolean;
};
declare const LocationInput: React.FC<LocationInputProps>;
export default LocationInput;
