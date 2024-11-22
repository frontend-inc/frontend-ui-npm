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
export default function LocationInput(props: LocationInputProps): React.JSX.Element;
export {};
