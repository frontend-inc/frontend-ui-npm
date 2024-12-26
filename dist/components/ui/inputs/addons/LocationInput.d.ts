import React from 'react';
import { TextInputProps } from '../../../../types';
type LocationInputProps = TextInputProps & {
    enablePosition?: boolean;
    lat?: number;
    lng?: number;
    height?: number;
    width?: number;
    zoom?: number;
    darkTheme?: boolean;
};
export default function LocationInput(props: LocationInputProps): React.JSX.Element;
export {};
